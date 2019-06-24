# py4e-pwn

> Gaming the py4e (Python for Everybody) platform developed by Charles Severance (csev)

<POC demo>

## Disclaimer

**py4e-pwn** is intended to be a proof of concept. As of the time of testing, I found it to successfully solve all the programming challenges with 100% success. I'll be not be maintaining this code to be an effective attack on py4e. It was created just because I attended his talk (Techfest '18, IIT Bombay) and was intrigued.

I'll be submitting patches to the official repository if I get time.


## What it does

py4e-pwn system has attack capabilities written for py4e auto-grader. Using chrome and javascript hooks, we can interact with the target website and engage with it, parsing out the necessary elements to begin the attack. Specifically, py4e-pwn targets a variable holding sensitive information.


## How it works

Unfortunately, there's a `window.CHECKS` function which holds an array with essential checks that are made during the grading process. To attack this, our chrome extension grabs the constraints, extracts data, understands the checks, and builds a payload (python-code) that evades the py4e-auto-grader.

## Versions

* Throws out instructions to craft the payload *(master branch)*
* Returns ready-made python-code *(dev branch)*

## Installation

First, clone the repository :

```
$ git clone https://github.com/0x48piraj/py4e-pwn
```

Make sure you have Chrome browser installed. Open the browser, type `chrome://extensions/` into the address bar, and hit enter. Toggle the "Developer mode", enable it. Click "Load Unpacked" and browse to the cloned repository. Select `../py4e-pwn/py4e-chrome` to load the extension.

Then, to kick off the PoC:

* Switch to py4e assignment tab
* Open Chrome Dev Console (CTRL+SHIFT+I)
* Open the loaded chrome extension
* Hit "pwn this!"

This loads the scripts, interacts with the page to grab data, generates python code, and then displays it over Console. Once the code is generated, you can copy-paste it to pass the test.