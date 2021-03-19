import time
import flask
from werkzeug.utils import secure_filename
import os

app = flask.Flask(__name__)
UPLOAD_FOLDER = 'static/upload'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/time')
def getCurrentTime():
    return {'time': time.time()}


@app.route('/upload', methods=['POST'])
def upload():
    if flask.request.method == "POST":
        if 'file' not in flask.request.files:
            flask.flash('No file part')
            return flask.redirect(flask.request.url)
        file = flask.request.files['file']
        if file.filename == "":
            flask.flash('No selected file')
            return flask.redirect(flask.request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return flask.redirect(flask.url_for('uploaded_file', filename=filename))


def rgb_to_hsv(r, g, b):
    r, g, b = r/255.0, g/255.0, b/255.0
    mx = max(r, g, b)
    mn = min(r, g, b)
    df = mx-mn
    if mx == mn:
        h = 0
    elif mx == r:
        h = (60 * ((g-b)/df) + 360) % 360
    elif mx == g:
        h = (60 * ((b-r)/df) + 120) % 360
    elif mx == b:
        h = (60 * ((r-g)/df) + 240) % 360
    if mx == 0:
        s = 0
    else:
        s = (df/mx)*100
    v = mx*100
    return h/2, s, v


'''
NOTE:

WHITE = 0
GREEN = 1
ORANGE = 2
BLUE = 3
RED = 4
YELLOW = 5

'''