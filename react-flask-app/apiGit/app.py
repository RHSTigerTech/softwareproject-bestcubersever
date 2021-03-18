import time
import flask
import os

app = flask.Flask(__name__)
UPLOAD_FOLDER = 'static/upload'


@app.route('/time')
def getCurrentTime():
    return {'time': time.time()}


@app.route('/upload', methods=['PUT'])
def upload():
    if flask.request.method == "PUT":
        files = flask.request.getlist("file")
        for file in files:
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))


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