
<template>
  <v-app id = "home" :style="{ background: $vuetify.theme.themes.dark.background }">
    <Nav-bar v-bind:entries="entries" :items="items"/>
    <v-container fluid class="py-0 px-0">
        <v-container fluid class="py-0 px-0" id="home" style="height: 100vh;" v-intersect="{ 
            handler: onIntersect,
            once: true,
            options: {
            threshold: [0.8]
            }
          }">
        <v-row id="top">
          <v-col align = "center" id="header">
            <v-img src="@/assets/profile.jpg" max-height="400" max-width="400"></v-img>
            <h1 style="color:#E53935">Hello, I'm Natdanai Phongam</h1>
            <h2 style="color:#62E570">Web Developer</h2>
            <p style="color:#fefefe">Fresh Graduate that has passionate about Website/Application Design. 
            <br />Looking forward to working with various companies to create an exquisite and fantastic product!
            </p>
            <div class="contact">
              <h1 style="color:#fefefe" class="contact_top">Contact Me</h1>
              <p><v-icon>mdi-email</v-icon>natdanai.phongam@gmail.com<v-icon>mdi-phone</v-icon>062-951-5461</p>
            </div>
          </v-col>
<!--           <v-col cols= "5" align="center">
            <v-img id= "home_pro" src="@/assets/skadi.png" contain max-height="700" max-width="500"></v-img>
          </v-col> -->
        </v-row>
        </v-container>
<!-----------about me----------->
        <v-container fill-height fluid class="py-0 px-0" id="about" style="height: 100vh;"
        v-intersect="{
            handler: onIntersect,
            once:true,
            options: {
            threshold: [0.8]
            }
          }">
          <v-row>
            <v-col cols="4" align = "right" >
              <v-img src="@/assets/profile.jpg" max-height="500" max-width="400"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card id="card" width="75%" flat outlined color="transparent">
                <h1 class = "red--text lighten-5 about_title">About Me</h1>
                <p class = "about_sub" style="color:#fefefe">I am a graduate student in the computer science field at Chulalongkorn University. 
                <br />I have always been passionate about design and the artistic aspect of applications and websites.
                <br />I am seeking opportunities to work in a related field for my career.</p>
                <v-tabs slider-size="3" background-color="transparent" dark rounded color="#62E570">
                  <div></div>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab><v-card flat outlined color="transparent">Skills</v-card></v-tab>      
                  <v-tab><v-card flat outlined color="transparent">Education</v-card></v-tab>
                  <v-tab-item class="content" :transition="false">

                    <v-card flat outlined color = "#171925" class="Joe">
                    <h2 style="color:#fefefe">Programing Language</h2>
                    <p style="color:#fefefe">- Python, Java, C#, C, HTML, CSS, JavaScript</p>
                    <h2 style="color:#fefefe">Frameworks/Tools</h2>
                    <p style="color:#fefefe">- Vue, Unity, Visual Studio, JFrame, Blender, Krita, Asperite, Tableau, Rapidminer</p>
                    </v-card>
                </v-tab-item>
                  <v-tab-item class="content" :transition="false">
                    <v-card flat outlined color = "#171925">
                    <h2 style="color:#fefefe">2018-2022</h2>
                    <p style="color:#fefefe">Chulalongkorn University</p> 
                    <p style="color:#fefefe"> - Bachelor's Degree in Computer Science</p>
                    <h2 style="color:#fefefe">2014-2017</h2>
                    <p style="color:#fefefe">LaSalle College</p>
                    </v-card>
                  </v-tab-item>
              </v-tabs>
                </v-card>
              </v-col>
            </v-row>
        </v-container> 
<!-----------Project--------->
    <v-container fluid class="py-0 px-0" id="project" style="height: 100vh;"
      v-intersect="{
          handler: onIntersect,
          once:true,
          options: {
          threshold: [0.8]
          }
        }">
          <h1 class="red--text lighten-5 project_title" align="center">Project</h1>
          <v-row class="mb-6" justify="center">
            <v-col cols="3">
              <v-card class="text-center">
              <h2 style="font-size: 1.563rem;">Meowquerade</h2>
              <p style="font-size: 1rem;">UX/UI Designer</p>
              <div class="tab-item-wrapper">
                <v-container fluid class="project_content">
                  <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;Meowquerade is a tabletop Role-play game that got inspired by the famous game "Among Us".
                  We decided to start this project based on the vote of majorities according to the goal of the Software Engineering class.
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;In this project, I have learned how to work on new tools eg. Unity and 
                  design various aspects of the game. As a result, it made me strive to learn more about design and modern art.
                  </p>
                  <v-img src="@/assets/Meowquerade.png" contain max-height="30vh" max-width="40vh"></v-img>
                </v-container>
              </div>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="text-center">
              <h2 style="font-size: 1.563rem;">Arkrom</h2>
              <p style="font-size: 1rem;">UX/UI Designer</p>
              <div class="tab-item-wrapper">
                <v-container fluid class="project_content">
                  <p align= "left">&nbsp;&nbsp;&nbsp;&nbsp;Arkhom is a small game development project on Object-Oriented class.
                  It's a Card Battle games which represent in a turn-based style.
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;As it's a small project and mostly work on planning and writing a document,
                  most of design would go into interface and static artwork for documentation.
                  </p> 
                  <v-img src="@/assets/Arkhom.png" contain max-height="30vh" max-width="40vh"></v-img>
                </v-container>
              </div>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="text-center">
              <h2 style="font-size: 1.563rem;">Glitcher of the Cosmata</h2>
              <p style="font-size: 1rem;">2D/3D Artist/Graphic Designer</p>
              <div class="tab-item-wrapper">
                <v-container fluid class="project_content">
                  <p align= "left">&nbsp;&nbsp;&nbsp;&nbsp;Glitcher of the Cosmata is a Card-Battler game with the Roguelike element
                  and the game uses procedural content generation to randomly generate content, such as cards, enemies, and levels,
                  every time the player starts a new game.
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;This project is my final year project and it is my first time working on a long-term project.
                  But it's also, a significant achievement in my life.
                  Regarding the project, I have learned to work efficiently and how to adjust to a new area of study within the time limit.
                  </p>
                    <v-img src="@/assets/GOTC.jpg" contain max-height="25vh" max-width="35vh"></v-img>
                </v-container>
              </div>
              </v-card>
            </v-col>
          </v-row> 
      </v-container>
<!-----------award--------->
      <v-container fluid fill-height class="py-0 px-0" id="award" style="height: 100vh;"
      v-intersect="{
            handler: onIntersect,
            once:true,
            options: {
            threshold: [0.8]
            }
          }">
          <v-row class="mb-6" justify="center">
            <h1 class="red--text lighten-5 text-center award_title">Award & Prizes</h1>
            <v-container fluid class="py-0 px-0">
              <v-card align="center" color="transparent" flat>
                <h1 style="font-size:2.441rem" class="award_subtitle">Best of game design</h1>
                <h2 style="font-size: 1.563rem;" class="award_text">in Game Talent Showcase presented by bitkub<br />from Thai Game Software Industry Association (TGA)</h2>
                <v-spacer></v-spacer>
                <v-row>
                  <v-col cols="3"></v-col>
                  <v-col cols="6">
                    <v-card class="text-center" flat >
                        <v-row>
                          <v-col cols="4">
                            <v-img src="@/assets/GOTC.jpg" height="300" width="600"></v-img>
                          </v-col>
                          <v-col cols="4">
                            <v-img src = "@/assets/Pee.jpg" height="300" width="600"></v-img>
                          </v-col>
                          <v-col cols="4">
                            <v-img src="@/assets/Poo.jpg" height="300" width="600"></v-img>
                          </v-col>
                        </v-row> 
                    </v-card>
                  </v-col>
                  <v-col cols="3"></v-col>
                </v-row>
              </v-card>
            </v-container>
          </v-row>
      </v-container>
    <v-container fluid fill-height class="py-0 px-0" id="contact" style="height: 40vh;" align="right"
      v-intersect="{
            handler: onIntersect,
            once:true,
            options: {
            threshold: [0.8]
            }
          }">
              <v-col class="contact-left" align="left">
                <h1 class="red--text lighten-5 contact_title">Contact Me</h1>
                <p><v-icon>mdi-email</v-icon>natdanai.phongam@gmail.com</p>
                <p><v-icon>mdi-phone</v-icon>062-951-5461</p>
                <div class="social-icons">
                  <a :href="links[0]" target="blank"><v-icon>mdi-linkedin</v-icon></a>
                  <a :href="links[1]" target="blank"><v-icon>mdi-github</v-icon></a>
                </div>
              </v-col>
      </v-container>
    </v-container>
  </v-app>
</template>



<script>

import navBar from '../components/navBar'


export default {
  name: 'Home',
  components: {
    'Nav-bar': navBar
  }, 
  data() {
    return {
      entries: "apple",
      items: ["home", "about", "project", "award", "contact"],
      links: ["https://linkedin.com/in/natdanai-phongam-bb1610260","https://github.com/Natdanai-Phongam"]
    }
  },
  methods:{
    // eslint-disable-next-line no-unused-vars
    onIntersect(entries) {
      entries.forEach((entry)=>{
        if (entry.intersectionRatio > 0){
          if (entry.target.id == "home"){this.entries = "home"}
            else if (entry.target.id == "about") { this.entries = "about" }
            else if (entry.target.id == "project") { this.entries = "project" }
            else if (entry.target.id == "award") { this.entries = "award" }
            else if (entry.target.id == "contact") { this.entries = "contact" }
        }
      })
    },
    
  }
}
</script>

<style>
 @import '@/assets/stylesheet.css';
</style>
