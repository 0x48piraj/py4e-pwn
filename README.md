# py4e-pwn

> Gaming the py4e (Python for Everybody) platform developed by Charles Severance (csev)

#### UPDATE (Jun 27, 2019)

> *(Charles Severance replied to this incident)*
> 
> **Charles :** This has been a feature of this auto-grading software from the beginning.  You will notice how I conveniently keep debugging messages in the console to help guide you to where this is happening.  If you can dig through 500 lines of JavaScript to find and use this exploit - you can write a 10 line Python program.  You are neither clever nor creative in this pwn.  I would suggest you just take this video down.
> 
> **Me :** It's true, I know this is a well intended feature. It's not a creative pwn. I agree on all these points. But I think, you could have done these checks on server side, thus protecting the sensitive arguments. What do you think ?
> 
> **Me :** Sorry if my intentions seemed malicious, this video was supposed to be educational. I was at your talk at Techfest, IIT Bombay, last year. I was intrigued and inspired by your initiatives. About, how you goto your offices situated at various locations, how you help students like us. Sorry if it made you uncomfortable.
> 
> **Charles :** **@0x48piraj**, It does not make me uncomfortable.  I agree that it is somewhat of educational.  My reaction was that you present your video as if you found something significant from a security perspective which is an overstatement.
> 
> **Charles :** **@0x48piraj**, The reason this is all done client side is that there would be far more security vulnerabilities to worry about running student code in my server.  Instead of building a server-side solution and then forever worrying about my servers being compromised, I chose a client side solution which if examined closely, could bypass my checking but insured that the Python code would only harm the end-user's browser.  These courses are for those who want to learn Python so the stakes are low - it is a much higher priority for me to provide a good learning experience than to create an impenetrable assessment engine.  If a school is using my auto-graders for anything other than a formative assessment it is a mistake.
>
> **Me :** **@Charles Severance**, Not meant to pose this as a significant security vulnerability, as it obviously isn't. And, now, I completely understood the reason behind it. Thanks a lot for clearing out and replying to the video :)









> #### Reference : [YouTube](https://www.youtube.com/watch?v=U8LDiWQKgmA&lc=z23rud0j1vf5cfjjl04t1aokghnx4ej54vlqfv2msevwbk0h00410.1561564060558510)
> 

## Demo

<div align="center">
  <a target="_blank" href="https://www.youtube.com/watch?v=U8LDiWQKgmA"><img src="https://img.youtube.com/vi/U8LDiWQKgmA/0.jpg" alt="py4e-pwn : Pwning Python for Everybody Auto-Grader / Grading System"></a>
</div>

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
