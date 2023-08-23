hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

window.onload = function (argument) {
  // var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it";
  var lyric =
    "zenith zealot yearn yawner xenophobia vague unique uncanny tenacious tangible serene saquinavir rhetorical rambunctious quixotic quell pique paradigm oxymoron optimistically nostalgic narrative misanthropemelancholy lucid lethargic ken karma jurisdiction jejune irony integrity hypnosis hyperbole guise gallivant fortitude fervent esoteric empathy dubious disposition cynical capricious bypass benevolent ambiguous alliteration Abomasum Absquatulate Adagio Alfresco Alcazar Amok Amphisbaena Antimacassar Atingle Bailiwick Bafflegab Ballistic Bamboozle Bedlam Bugbear Bulbous Calamity Calliope Catamaran Convivial Cornucopia Crescendo Crestfallen Cryptozoology Demitasse Derecho Diphthong Doldrums Doohickey Doppelgänger Dumfounded Related Earwig Elixir Ephemeral Ersatz Finagle Festooned Fez Flimflam Flummery Flyspeck Foofaraw Fracas Frangipani Fuddyduddy Futz Gadzooks Gambit Gazebo Gizmo Glabella Gossamer Guffaw Guru Haboob Halcyon Haphazard Headlong Heyday Hodgepodge Hokum Hooligan Hullabaloo Huzzah Ignoramus Infinitesimal Interrobang Izzard Jabberwocky Jalopy Jitney Juggernaut Juxtaposition Kaput";
  var words = {};
  var words_attr = [];
  string_handle(lyric);

  var canvas = document.getElementById("c");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (canvas.getContext) {
    var c = canvas.getContext("2d"),
      w = canvas.width,
      h = canvas.height;

    c.strokeStyle = "red";
    c.fillStyle = "white";
    c.lineWidth = 5;

    // constructor
    Word = function (key) {
      this.text = key;
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.font = words[key] * 20 + "px arial";

      this.speed = words[key];
    };
    for (key in words) {
      words_attr.push(new Word(key));
    }
    console.log(words_attr.length);

    function animation() {
      for (var i = 0; i < words_attr.length; i++) {
        c.font = words_attr[i].font;
        c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
        words_attr[i].width = c.measureText(words_attr[i].text).width;
        c.stroke();
      }
      move();
    }

    function move() {
      for (var i = 0; i < words_attr.length; i++) {
        if (words_attr[i].x > w) {
          words_attr[i].x = -words_attr[i].width;
          words_attr[i].y = Math.random() * h;
        } else {
          words_attr[i].x += words_attr[i].speed*2.5;
        }
      }
    }

    setInterval(function () {
      c.clearRect(0, 0, w, h);
      animation();
    }, 40);
  }

  function string_handle(str) {
    var split_str = str.split(" ");
    var word_array = [];
    var word_count = [];
    for (var i = 0; i < split_str.length; i++) {
      check = true;
      for (var j = 0; j <= word_array.length; j++) {
        if (split_str[i] == word_array[j]) {
          word_count[j]++;
          check = false;
          break;
        }
      }
      if (check) {
        word_array.push(split_str[i]);
        word_count.push(1);
      }
    }
    for (var i = 0; i < word_array.length; i++) {
      words[word_array[i]] = word_count[i];
    }
    return words;
  }
};
function validateemail() {
  var x = document.myform.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert("Please enter a valid e-mail address");
    return false;
  }
}
var loader = document.getElementById("loader");
var bdy = document.getElementById("body");
window.addEventListener(
  "load",
  setTimeout(() => {
    (loader.style.display = "none"), (bdy.style.overflow = "auto");
  }, 2500)
);

function devon() {
  document.getElementById("dev-overlay").style.display = "block";
}

function devoff() {
  document.getElementById("dev-overlay").style.display = "none";
}
function uion() {
  document.getElementById("ui-overlay").style.display = "block";
}

function uioff() {
  document.getElementById("ui-overlay").style.display = "none";
}
function conon() {
  document.getElementById("con-overlay").style.display = "block";
}

function conoff() {
  document.getElementById("con-overlay").style.display = "none";
}
