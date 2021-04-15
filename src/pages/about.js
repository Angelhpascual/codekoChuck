import React from "react";
import chuckSmile from "../assets/images/smile.jpg";
import chuckEEUU from "../assets/images/EEUU.jpeg";
import chuckBad from "../assets/images/badass.jpg";
import animate from "animate.css";

const About = () => {
  return (
    <div className="bg-yellow-500 pb-20 py-20">
      <div className="container mx-auto grid grid-cols-3  gap-4 ">
        <div className="animate__animated animate__bounceInLeft ">
          <img src={chuckSmile} alt="Chuck Smile :)" className="w-full" />
        </div>
        <div className="rounded-xl flex flex-col items-center col-span-2 bg-yellow-600 animate__animated animate__bounceInRight px-10">
          <h1 className="font-light text-7xl p-8  uppercase underline">
            Early Life
          </h1>
          <p className="py-9 text-justify font-mono ">
            Norris was born in Ryan, Oklahoma on March 10, 1940 to Wilma (née
            Scarberry) and Ray Dee Norris, who was a World War II Army soldier,a
            mechanic, bus driver, and truck driver. Norris has stated that he
            has Irish and Cherokee roots. Norris was named after Carlos Berry,
            his father's minister. He was the oldest of three brothers, the
            younger two being Wieland and Aaron (a Hollywood producer). When
            Norris was sixteen, his parents divorced,and he later relocated to
            Prairie Village, Kansas and then to Torrance, California with his
            mother and brothers. Norris has described his childhood as downbeat.
            He was nonathletic, shy, and scholastically mediocre. His father,
            Ray, worked intermittently as an automobile mechanic, and went on
            alcohol drinking binges that lasted for months at a time.
            Embarrassed by his father's behavior and the family's financial
            plight, Norris developed a debilitating introversion that lasted for
            his entire childhood.
          </p>
          <p className="font-light text-justify font-mono ">
            Norris has described his childhood as downbeat. He was nonathletic,
            shy, and scholastically mediocre. His father, Ray, worked
            intermittently as an automobile mechanic, and went on alcohol
            drinking binges that lasted for months at a time. Embarrassed by his
            father's behavior and the family's financial plight, Norris
            developed a debilitating introversion that lasted for his entire
            childhood.
          </p>
        </div>

        <div className=" rounded-xl flex flex-col items-center col-span-2  bg-yellow-600 animate__animated animate__bounceInLeft px-10 ">
          <h1 className="font-light text-7xl p-10 uppercase underline mb-8">
            Action Film Star
          </h1>
          <p className="py-5 px-5 font-light text-justify font-mono pt-4">
            In 1979, Norris starred in A Force of One, where he played Matt
            Logan, a world karate champion who assists the police in their
            investigation. The film was developed while touring for Good Guys
            Wear Black. Again no studio wanted to pick it up, but it out-grossed
            the previous film by making $20 million at the box office. In 1980,
            he released The Octagon, where his character must stop a group of
            terrorists trained in the ninja style. Unlike his previous films
            this time the studios were interested. American Cinema Releasing
            distributed it and it made almost $19 million at the box office. In
            1981, he starred in Steve Carver's An Eye for an Eye, co-starring
            Christopher Lee, Richard Roundtree, Matt Clark, and Mako Iwamatsu.
            The following year, he had the lead in the action horror film Silent
            Rage (1982) it was his first film released by a major studio
            Columbia Pictures. In the film, Norris plays a sheriff who must stop
            a psychopath who goes on a rampage after being granted
            near-indestructibility in a medical experiment. Shortly afterward
            MGM gave him a three-movie deal and that same year, they released
            Forced Vengeance (1982). Norris was unhappy with the direction they
            wanted to take with him, hence the contract was canceled. In 1983,
            Norris made Lone Wolf McQuade with Orion Pictures. He played J.J.
            McQuade, a reckless Texas Ranger who'd rather work alone but who
            gets a new partner because his captain would like to have him
            supervised. The partners investigate an arms dealer played by David
            Carradine.
          </p>
          <p className=" py-9 px-5 font-light text-justify font-mono ">
            The film was a worldwide hit and had a positive reception from movie
            critics, often being compared to Sergio Leone's stylish Spaghetti
            Westerns. The film became the inspiration for Norris's future hit TV
            show Walker, Texas Ranger. Film critic Roger Ebert gave the film a
            3.5 star rating, calling the character of J.J. McQuade worthy of a
            film series and predicting the character would be a future classic.
            The same year, he also published his second book about general
            exercising called Toughen Up! the Chuck Norris Fitness System. Also
            in 1983, Xonox produced the video game Chuck Norris Superkicks for
            the Commodore 64, Commodore VIC-20, Atari 2600, and Colecovision.
            The game combines two types of gameplay: moving through a map, and
            fighting against enemies. The player takes control of Chuck Norris
            who has to liberate a hostage. It was later sold as Kung Fu
            Superkicks when the license for the use of the name Chuck Norris
            expired.
          </p>
        </div>
        <div className="  animate__animated animate__bounceInRight ">
          <img src={chuckEEUU} className="h-full object-cover " alt="" />
        </div>
        <div className="  animate__animated animate__bounceInLeft animate__fast">
          <img src={chuckBad} className=" object-cover  h-full " alt="" />
        </div>
        <div className=" col-span-2 bg-yellow-600 rounded-xl flex flex-col animate__animated animate__bounceInRight">
          <h1 className="font-light text-7xl p-10 uppercase underline mb-8">
            Philanthropy
          </h1>
          <p className="py-9 px-12 font-light text-justify font-mono  ">
            In 1979, Norris starred in A Force of One, where he played Matt
            Logan, a world karate champion who assists the police in their
            investigation. The film was developed while touring for Good Guys
            Wear Black. Again no studio wanted to pick it up, but it out-grossed
            the previous film by making $20 million at the box office. In 1980,
            he released The Octagon, where his character must stop a group of
            terrorists trained in the ninja style. Unlike his previous films
            this time the studios were interested. American Cinema Releasing
            distributed it and it made almost $19 million at the box office. In
            1981, he starred in Steve Carver's An Eye for an Eye, co-starring
            Christopher Lee, Richard Roundtree, Matt Clark, and Mako Iwamatsu.
            The following year, he had the lead in the action horror film Silent
            Rage (1982) it was his first film released by a major studio
            Columbia Pictures. In the film, Norris plays a sheriff who must stop
            a psychopath who goes on a rampage after being granted
            near-indestructibility in a medical experiment. Shortly afterward
            MGM gave him a three-movie deal and that same year, they released
            Forced Vengeance (1982). Norris was unhappy with the direction they
            wanted to take with him, hence the contract was canceled. In 1983,
            Norris made Lone Wolf McQuade with Orion Pictures. He played J.J.
            McQuade, a reckless Texas Ranger who'd rather work alone but who
            gets a new partner because his captain would like to have him
            supervised. The partners investigate an arms dealer played by David
            Carradine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
