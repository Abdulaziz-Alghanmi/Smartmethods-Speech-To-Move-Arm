var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

// recognition is started

recognition.onstart = function() {

 instructions.text("listening, please speak...")

}

recognition.onspeechend = function() {

 instructions.text("Stopped listening, hope you are done...")
 recognition.stop();

}

recognition.onerror = function() {

 instruction.text("Try Again")

}

recognition.onresult = function(event) {

 var current = event.resultIndex;

 var transcript = event.results[current][0].transcript



 content += transcript
 onChangespeech()
 textbox.val(content)

}

$("#start-btn").click(function(event) {

 recognition.start();

})

textbox.on('input', function() {

 content = $(this).val()

})

