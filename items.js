const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
const dayOfWeek = date.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const currentDate = `${year}-${month}-${day} ${days[dayOfWeek]}`;

export let data = {
  posts: [
    {
      id: 1,
      title: "Lorem ipsum post#1",
      date: `${currentDate}`,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra in metus nec sagittis. Mauris ut leo justo. Praesent tristique velit ex, non fermentum sem hendrerit ut. Aliquam non gravida sem, sed rhoncus augue. Proin quam eros, lobortis eu ultrices malesuada, interdum vitae tortor. Cras eleifend consectetur dui venenatis luctus. Vivamus posuere, erat at porta tincidunt, sapien erat faucibus libero, ut hendrerit purus sapien a felis.Fusce odio tortor, pretium quis vestibulum vel, pellentesque non nisi.`,
    },
    {
      id: 2,
      title: "Lorem ipsum post#2",
      date: `${currentDate}`,
      content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit sem efficitur integer varius mattis ridiculus in maecenas. Montes maecenas posuere ac consectetur laoreet. Posuere massa nibh id facilisis at faucibus ullamcorper risus? Molestie lectus rutrum mattis feugiat vitae. Mus iaculis lacus cras integer vestibulum eleifend. Ipsum metus gravida felis, eleifend penatibus magna efficitur viverra.`,
    },
    {
      id: 3,
      title: "Lorem ipsum post#3",
      date: `${currentDate}`,
      content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Sit efficitur vehicula bibendum amet elit vivamus litora. Inceptos sociosqu viverra bibendum sed fermentum consectetur id. Posuere et curabitur eu fermentum, at semper nec id. Dictum fusce ac euismod vulputate sem? Mollis libero magna euismod curae parturient aliquet orci. Cras sit nulla elit a in fusce interdum dui. Potenti aptent felis leo parturient in auctor eget sollicitudin. Vivamus tempor luctus ridiculus scelerisque nam turpis tempor.`,
    },
  ],
};
