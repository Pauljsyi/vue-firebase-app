// we have access to a Vue object that has a method called createApp()
// we can pass in an object inside createApp()
// the object represents the root component
// we can pass in functions or data inside the
// we can also specify the component template, the template that will be rendered inside the app element.
const app = Vue.createApp({
  // template: "<h2> I am the template </h2>",
  // data() returns an object

  // to react to an event
  data() {
    return {
      url: "http://www.pauljsyi.com",
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      showOrHide: "show",
      show: true,
      title: "the final episode",
      author: "adam",
      age: 22,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle;
    },
    incrementAge() {
      this.age++;
    },
    decrementAge() {
      this.age--;
    },
    toggleShow() {
      this.show = !this.show;
      this.show !== true
        ? (this.showOrHide = "show")
        : (this.showOrHide = "hide");
    },
    handleEvent(e, data) {
      console.log(e);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

// data-v-app attribute means that Vue is mounted on this element

//we have access to a method called mount()
// mount() takes in a string (selector)
// we are mounting our app to an element that has an id app
// Vue only has control over anything inside that element.
app.mount("#app");
