# Online_proctoring_System
AI-Based Online Proctoring System
This is a fully functional AI-based online exam proctoring system built using Flask, HTML/CSS/JavaScript, and browser-based webcam monitoring.

🎯 Features:

👁️ Real-time webcam proctoring using browser APIs (no external installation required).

❗ Tab switch detection to prevent cheating.


📊 Proctoring summary after test completion:

Webcam monitoring percentage.

Tab switch count.

Clean/Suspicious behavior classification.

✅ 10-question quiz system (currently includes Indian General Knowledge).

📸 Face tracking during the test.

💯 Automatic scoring and result evaluation.

🔐 Runs entirely in the browser—privacy-respecting, no third-party uploads.


🚀 How to Run the Project
1.Clone the repository:

git clone https://github.com/yourusername/online-proctoring-system.git

cd online-proctoring-system


2.Create a virtual environment:

python -m venv venv

source venv/bin/activate   # For Windows: venv\Scripts\activate


3.Install dependencies:

pip install Flask


4.Run the Flask server:

python app.py



📁 Project Structure:
/online-proctoring-system
│
├── app.py                  # Flask backend
├── templates/
│   ├── index.html          # Landing page
│   ├── test.html           # Quiz interface with webcam and tracking
│   └── result.html         # Final score and proctoring summary
│
├── static/
│   ├── style.css           # Custom styles
│   └── script.js           # (Optional JS if external)
│
└── README.md               # Project documentation


📌 Example Output:


Test Completed

Score: 8 / 10

Time Taken: 60 seconds

Proctoring Summary:

Webcam Status: 93% (Good)

Tab Switches: 1

Overall Status: Clean



