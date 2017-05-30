function Pipes() {
    this.top = random(height /2);
    this.bottom = random(height / 2); 
    this.w = 15;
    this.x = width;
    this.speed = 3;
    this.hitPipe = false;


    this.show = function () {
        fill(255);
        if(this.hitPipe) {
            fill(255 , 0 , 0);

        }


        rect(this.x , 0, this.w , this.top);
        rect(this.x , height - this.bottom , this.w , this.bottom);


    }


    this.update = function () {
        this.x -= this.speed;



    }


    this.hit = function(bird){ 
        if(bird.y < this.top || bird.y > height - this.bottom ) {
            if(bird.x > this.x && bird.x < this.x + this.w) {
                this.hitPipe = true;
                return true;


            }



        }

        return false;

    }





}