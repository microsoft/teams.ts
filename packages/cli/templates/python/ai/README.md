# {{ name }} AI Bot

This template scaffolds a Microsoft Teams AI bot using teams.py and OpenAI.

## Setup

1. Create a virtual environment and activate it:
   python -m venv .venv
   .venv\Scripts\Activate.ps1  # PowerShell
   .venv\Scripts\activate.bat # cmd.exe

2. Install dependencies:
   pip install -r requirements.txt
   or
   pip install .

3. Copy environment example:
   copy .env.example .env
   and fill in the required variables.

## Environment variables

See .env.example for required variables.

## Run

From the project root:
python -m src.main
