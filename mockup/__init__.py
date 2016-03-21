from flask import Flask, render_template, url_for, request, redirect
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/team")
def team():
    return render_template('team.html')

@app.route("/news")
def news():
    return render_template('news.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

if __name__ == "__main__":
    app.secret_key = 'super_secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=8000)