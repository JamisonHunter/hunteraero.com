const message : string = "This page is still under construction."

function getMessage(text : string) : string{
    return text;
}

document.getElementById("work")!.textContent = getMessage(message);
