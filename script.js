var quiz = {
  user: "Dave",
  questions: [
  {
    text: "The Pseudocode is another name for?",
    responses: [
    { text: "Object code" },
    { text: "Algorithm", correct: true },
    { text: "Flowchart" },
    { text: "Coding" }] },


  {
    text: "In Visual Basic, the decleration of variables is done by_____key word?",
    responses: [
    { text: "dim", correct: true },
    { text: "int" },
    { text: "declare" },
    { text: "static" }] },


  {
    text: "Which of the following is not a keyword?",
    responses: [
    { text: "Read" },
    { text: "start", correct: true },
    { text: "Write" },
    { text: "endif" }] },


  {
    text: "When the user clicks a button,_______ is triggered?",
    responses: [
    { text: "an event", correct: true },
    { text: "a setting" },
    {
      text: "an order" },

    { text: "a property" }] },


  {
    text: "In Visual Basic, which of the following is a valid name for a varible?",
    responses: [
    { text: "$two_One" },
    {
      text: "Two One" },

    { text: "Two_One", correct: true },
    { text: "2_One" }] },


  {
    text:
    "The rectangle shape in the flowcahrt diagram is used for what?",
    responses: [
    { text: "Decision" },
    { text: "Start/Stop" },
    { text: "Processing", correct: true },
    { text: "Logic fow" }] },


  {
    text: "What is text box used for in the Visual Basic environment? ",
    responses: [
    { text: "Used for design" },
    {text: "Used for dragging text" },   
    { text: "Used to accept user input", correct: true },
    { text: "used to display a text" }] },


  {
    text: "The CancelButton is a property that belongs to____",
    responses: [
    { text: "Option" },
    { text: "Label", correct: true },
    { text: "TextBox" },
    { text: "Button" }] },


  {
    text:
    "The diamond shape in a flowchart stands for?",
    responses: [
    {text: "Input" },
    { text: "Process" },
    { text: "Decision", correct: true },
    { text: "Connectors" }] },


  {
    text: "The following phrase are involved in programming execpt?",
    responses: [
    { text: "Writing the program" },
    { text: "Modelling the program", correct: true },
    { text: "Devising an algroithm" },
    { text: "Problem definition " }] },
  {
    text: "What is flowchart?",
    responses: [
    { text: "Is a solution in the program" },
    { text: "It is a pictorial structure of a program", correct: true },
    { text: "it is drawing of a structure" },
    { text: "It is a step by step solution of a program" }] },
  {
    text: "The dirctional arrow shape in the flowchart is used for?",
    responses: [
    { text: "Logic flow", correct: true },
    { text: "Processing" },
    { text: "Decision" },
    { text: "Start/Stop" }] },
  {
    text: "The trapozodial shape in thw flowchart is used for?",
    responses: [
    { text: "Starting/Stopping" },
    { text: "Subroutine" },
    { text: "Input/Output", correct: true },
    { text: "Decision/Processing" }] },
  {
    text: "A term that refers to the way in which the nodes of a network are linmked together is called?",
    responses: [
    { text: "Interconnectivity" },
    { text: "Topology", correct: true },
    { text: "Connection" },
    { text: "Network" }] },
  {
    text: "What is the correct statment when declearing and assigning the value of 100 to an integer variable called numPeople?",
    responses: [
    { text: " Dim numPeople = 100" },
    { text: "Dim NumPeople As Integer = 100" },
    { text: "Dim numPeople As Integer = 100", correct: true },
    { text: "Dim numpeople As Integer = 100" }] },
  {
    text: "What is the code to close a form?",
    responses: [
    { text: "Form.Exit()" },
    { text: "Me.Close()", correct: true },
    { text: "ME.Clear()" },
    { text: "Form.Clear()" }] },
  {
    text: "In Visual Basic we work with objects, which have?",
    responses: [
    { text: "Projects, Solutions, and Procedures" },
    { text: "Classes, Actions, and Disciplines" },
    { text: "Properties, Methods, and Events", correct: true },
    { text: "Programmer preference" }] },
  {
    text: "What is the purpose of the ToolBox?",
    responses: [
    { text: "To design user-defined methods" },
    { text: "To select methods to be placed on the form" },
    { text: "To select controls with assiocited even procedures"},
    { text: "To select controls and place on an apllication form", correct: true }]},
  {
    text: "How would you get the Design window to display if it is not visible in your project?",
    responses: [
    { text: "Click View on the menu bar, and then on the View menu click Designer", correct: true },
    { text: " Press Shift+f9 on the keyboard" },
    { text: "Select view designer in the edit menu" },
    { text: "Double-click the icon in the toolbar for the designer window" }] },
  {
    text: "Which is considered a valid step for developing a Visual Basic application?",
    responses: [
    { text: "Create a flowchart or pseudocode version of each method" },
    { text: "Make a list of the controls needed" },
    { text: "Make a list of the methods needed for each control"},
    { text: "All of the above", correct: true}] },
  {
    text: "Finding and fixing programming errors is called?",
    responses: [
    { text: "recording" },
    { text: "tuning" },
    { text: "debugging", correct: true },
    { text: "fix-its" }] },
  {
    text: "If you are display text which cannot be modified by the user, use the?",
    responses: [
    { text: "Lable control", correct: true },
    { text: "TextBox control" },
    { text: "Name control" },
    { text: "Caption control" }] },
  {
    text: "Which of the following is NOT a Visual Basic Control?",
    responses: [
    { text: "TextBox" },
    { text: "Label" },
    { text: "Algorithm", correct: true },
    { text: "Form" }] },
  {
    text: "When creating a VB application, you will initially,",
    responses: [
    { text: "Check for logic errors" },
    { text: "Correct syntax errors" },
    { text: "Write program statements"},
    { text: "Change control properties", correct:true }] },
  {
    text: "When your program is in run time mode, you ____",
    responses: [
    { text: "Can create the user interface " },
    { text: "Can always edit your program" },
    { text: "Can interact with the program as it executes", correct: true },
    { text: "Can save your program" }] },
  {
    text: "Which data type is best for 'City name'",
    responses: [
    { text: "String", correct: true },
    { text: "Integer" },
    { text: "Floating Point" },
    { text: "Boolean" }] },
  {
    text: "When a student is learning computer programming, it is traditional to start by learning to write ____program.",
    responses: [
    { text: "Psuedocode" },
    { text: "Simple" },
    { text: "Hello World", correct: true },
    { text: "Algorithm" }] },
  {
    text: "The default property of a textbox control is .......",
    responses: [
    { text: "Text" },
    { text: "Name" },
    { text: "Enable"},
    { text: "Visible", correct: true}] },
  {
    text: "What loop control is best suited when you want to repeat a group of statements a specified number of times and loop index counts the number of the loop iterations as the loop executes?",
    responses: [
    { text: "Do" },
    { text: "For Each .. Next" },
    { text: "For Next", correct: true },
    { text: "While" }] },
  {
    text: "A file that contains a program code is called a ....file?",
    responses: [
    { text: "C#" },
    { text: "CS" },
    { text: "Program"},
    { text: "Sourse code", correct: true }] },
  ] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questions: quiz.questions,
    questionIndex: 29,
    userResponses: userResponseSkelaton,
    quizStarted: true,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },


  methods: {
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      // let answers2 = document.querySelector('.answers');
      // answers2.classList.add('answers');
      
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });

//     let questions = quiz.questions;
// let answers = document.querySelector('.answers');
//     for (let index = 0; index < questions.length; index++) {
//       const element = questions[index];
//       console.log(element);
//       let h1 = document.createElement('h4');
//       let br = document.createElement('br');
//       let q = document.createElement('p');
//       // let q = document.createElement('p');
//       let h1Content = document.createTextNode(`Question ${index + 1}`)
//       let qContent = document.createTextNode(`${element.text}`)
//       h1.appendChild(h1Content)
//       answers.appendChild(h1)
//       q.appendChild(qContent)
//       answers.appendChild(q)
//       let options = element.responses;
//       for (let i = 0; i < options.length; i++) {
//         let o = document.createElement('p');
//         let b = document.createElement('strong');
//         const element = options[i];
//         let oContent = document.createTextNode(`${i == 0 ? '(a)' : i == 1 ? '(b)' : i == 2 ? '(c)' : '(d)'} ${element.text}`);
//         let bContent = document.createTextNode(` ${element?.correct == true ? ": correct" : ": wrong"}`)
//         // oContent.append(` ${element?.correct == true ? "correct" : ":wrong"}`)
//         // let oContent = document.createTextNode(`${i == 0 ? '(a)' : i == 1 ? '(b)' : i == 2 ? '(c)' : '(d)'} ${element.text} ${element?.correct == true ? "correct" : ":wrong"}`);
//         o.appendChild(oContent);
//         b.appendChild(bContent)
//         if(element?.correct == true ){
//           b.style.color = "green";
//         } else {
//           b.style.color = "red";
//         }
//         o.appendChild(b);
//         answers.appendChild(o);
//       }
//     }