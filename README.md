# Text Summariser

This project is a text summarizer that uses a Large Language Model (LLM) to generate concise summaries of input text.

## Features

- **Text Summarization**: Generates concise summaries from input text using a Large Language Model.
- **React Frontend**: A responsive and intuitive frontend built with React.
- **Python Backend**: A robust backend server built using Python to handle text processing and summarization.

## Tech Stack

- **Frontend**: React
- **Backend**: Python (Flask/Django/FastAPI)
- **Database**: SQLite/PostgreSQL/MySQL (choose as per your setup)
- **LLM**: OpenAI GPT-4 (or specify the model you used)

## Setup

### Prerequisites

- Node.js and npm installed
- Python 3.x installed
- Virtual environment (optional but recommended)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/textsummariser.git
    cd textsummariser
    ```

2. **Setup the backend**:
    ```sh
    cd backend
    python3 -m venv venv
    source venv/bin/activate   # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. **Run the backend server**:
    ```sh
    python app.py   # or the entry-point file you have
    ```

4. **Setup the frontend**:
    ```sh
    cd ../frontend
    npm install
    ```

5. **Run the frontend**:
    ```sh
    npm start
    ```

## Usage

Once both the backend and frontend servers are running, you can access the application via your web browser. Use the interface to input text, and the app will generate and display a concise summary of the text.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

