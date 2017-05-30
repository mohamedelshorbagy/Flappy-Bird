function Bird() {
/* Declaring Variables */ 

    this.y = height / 2;
    this.x = 65;
    this.gravity = 0.6;
    this.upForce = -20;
    this.velocity = 0;


    /* To Show Bird */ 

    this.show = function () {
        fill(255);
        ellipse(this.x , this.y , 25 , 25);


    }


    /* To Make the Bird Get Down Firstly */ 

    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity; 


        /* If Bird Hit Bottom Wall */ 

        if(this.y > height) {
            this.y = height;
            this.velocity = 0;


        }
        /* If Bird Hit Upper Wall */ 
 
        if(this.y < 0) {
            this.y = 0;
            this.velocity = 0;

        }


    }
    



    /* To Make Bird To Go Up if Space is Pressed */ 

    this.up = function() {
     this.velocity += this.upForce;

    }








}