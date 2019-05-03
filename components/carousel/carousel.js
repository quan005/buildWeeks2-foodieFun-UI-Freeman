class Carousel {
  constructor(carouselElement){

    this.carouselElement = carouselElement;

    this.prev = this.carouselElement.querySelector(".carousel .left-button");

    this.next = this.carouselElement.querySelector(".carousel .right-button");

    this.slides = this.carouselElement.querySelectorAll(".carousel-slide");

    this.index = 0;

    this.slides[this.index].classList.add("selected");

    this.prev.addEventListener("click", () => this.toggleLeft());
    this.next.addEventListener("click", () => this.toggleRight());
  }

  toggleLeft() {
    this.slides[this.index].classList.remove("selected");

    if (this.index == 0) {
      this.index = this.slides.length - 1;
    } else {
      this.index--;
    }

    this.slides[this.index].classList.add("selected");
  }

  toggleRight() {
    this.slides[this.index].classList.remove("selected");

    if (this.index == this.slides.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }

    this.slides[this.index].classList.add("selected");
  }
}

let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
