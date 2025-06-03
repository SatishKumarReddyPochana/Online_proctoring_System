from flask import Flask, render_template, request, redirect, session
from questions import questions
import datetime

app = Flask(__name__)
app.secret_key = "your_secret_key"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start', methods=['POST'])
def start_test():
    session['start_time'] = datetime.datetime.now().isoformat()
    session['current'] = 0
    session['answers'] = []
    return redirect('/test')

@app.route('/test')
def test():
    current = session['current']
    if current >= len(questions):
        return redirect('/result')
    question = questions[current]
    return render_template('test.html', question=question, current=current+1, total=len(questions))

@app.route('/submit', methods=['POST'])
def submit_answer():
    answer = request.form.get('option')
    session['answers'].append(answer)
    session['current'] += 1
    return redirect('/test')

@app.route('/result')
def result():
    submitted = session['answers']
    correct = sum(1 for i, q in enumerate(questions) if submitted[i] == q['answer'])
    start_time = datetime.datetime.fromisoformat(session['start_time'])
    duration = (datetime.datetime.now() - start_time).seconds
    proctoring = request.args.get('proctoring', 'Not Available')
    return render_template('result.html', score=correct, total=len(questions), time=duration, proctoring=proctoring)

if __name__ == '__main__':
    app.run(debug=True)
