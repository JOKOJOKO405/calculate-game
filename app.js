var app = new Vue({
  el: '#app',
  data: {
    title: true,
    isStart: false,
    answer: null,
    fillLeft: '',
    fillRight: '',
    fillAnswer: '',
    min: 3,
    max: 10,
    correct: false,
    incorrect: false,
    timer: null,
    timerId: '',
    correctNum: 0,
    incorrectNum: 0,
    score: false,
    timeUp: false
  },
  methods: {
    startGame: function(){
      this.score = false;
      this.title = false;
      this.isStart = true;
      this.createAnser();
      this.timer = 30;
      this.setTimer();
    },
    quitGame: function(){
      clearInterval(this.timerId);
      this.title = true;
      this.isStart = false;
      this.timer = 30;
      this.score = false;
      console.log(this.timer);
    },
    changeNum: function(){
      this.createAnser();
    },
    createAnser: function(){
      this.correct = false;
      this.incorrect = false;
      this. answer = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    startCulc: function(){

      this.fillAnswer = this.fillLeft + this.fillRight;

      if(this.fillAnswer === this.answer){
        this.correct = true;
        this.correctNum++;
      }else{
        this.incorrect = true;
        this.incorrectNum++;
      }

      this.fillRight = '';
      this.fillLeft = '';

      setTimeout(this.createAnser, 1000);
    },
    setTimer: function(){
      this.timerId = setInterval(() => {
        
        this.counter();
        
        if(this.timer <= 0){
          clearInterval(this.timerId);
          this.timeUp = true;
          setTimeout(this.showScore, 1800);
        }
      }, 1000);
    },
    counter: function(){
      --this.timer;
    },
    showScore: function(){
      this.timeUp = false;
      this.isStart = false;
      this.score = true;
    }
  }
});

