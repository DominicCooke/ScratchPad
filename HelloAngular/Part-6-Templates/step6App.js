var app = angular.module("my6App", []);



app.controller("PersonCtrl", function ($scope) {
    $scope.persons = 
        [
            {
                first: "Tibault",
                middle: "Jacob",
                last: "Mendocino",
                gender: "M"
            },
            {
                first: "Ann",
                middle: "Graham",
                last: "Aundry",
                gender: "F"
            },
            {
                first: "Bessy",
                middle: "John",
                last: "Meldocino",
                gender: "F"
            },
            {
                first: "Henry",
                middle: "Lacey",
                last: "Tudor",
                gender: "M"
            },
            {
                first: "Romeo",
                middle: "Volvic",
                last: "Luccino",
                gender: "M"
            }
        ];
});
app.controller("QuestionnaireCtrl", function ($scope) {
    $scope.questionnaire = [
        {number: "1", question: "How old are you?", type: "number" },
        {number: "2", question: "Your date of birth?", type: "date" },
        {number: "3", question: "Describe yourself in a few words", type: "text" },
        {number: "4", question: "What is your favorite colour?", type: "singleOption" },
        {number: "5", question: "Which of the following sweets do you like?", type: "multiOption" },
        ]
});
