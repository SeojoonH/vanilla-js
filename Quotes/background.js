const images = [
  "https://cdn.pixabay.com/photo/2015/03/12/04/43/landscape-669619_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/10/13/13/19/landscape-4546121_960_720.jpg",
  "https://images.pexels.com/photos/3081487/pexels-photo-3081487.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3081487.jpg&fm=jpg",
  "https://images.pexels.com/photos/286076/pexels-photo-286076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://t1.daumcdn.net/cfile/tistory/99696A4E5C10CEFF30",
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${randomImg}`;

document.body.appendChild(bgImage);
