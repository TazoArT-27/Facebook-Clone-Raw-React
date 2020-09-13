import React from 'react';
import './StoryReel.css';
import pic1 from './images/cyberpunk _ Tumblr.jfif'
import pic2 from './images/A Night Among Trees.jfif'
import pic3 from './images/Download wallpaper 1920x1080 wolf, silhouette, hills, mountains, loneliness full hd, hdtv, fhd, 1080p hd background.png'
import pic4 from './images/Our Sci-Fi Future.png'
import pic5 from './images/Wallpaper of the Week 383.png'
import Story from './Story';

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image = {pic1}
                profileSrc = {pic5}
                title = 'Jacobson Henry'

            />
            <Story
                image = {pic2}
                profileSrc = {pic4}
                title = 'Mark Pollack'

            />
            <Story
                image = {pic3}
                profileSrc = {pic1}
                title = 'Kevin Line'

            />
            <Story
                image = {pic4}
                profileSrc = {pic2}
                title = 'Trinity Mallet'

            />
            <Story
                image = {pic5}
                profileSrc = {pic3}
                title = 'Goerge Nathan'

            />
        </div>
    );
};

export default StoryReel;

// import pic1 from '../../images/cyberpunk _ Tumblr.jfif'
// import pic2 from '../../images/A Night Among Trees.jfif'
// import pic3 from '../../images/Download wallpaper 1920x1080 wolf, silhouette, hills, mountains, loneliness full hd, hdtv, fhd, 1080p hd background.png'
// import pic4 from '../../images/Our Sci-Fi Future.png'
// import pic5 from '../../images/Wallpaper of the Week 383.png'
// import pic6 from '../../images/Old Island by JoeyJazz on DeviantArt.jfif'

// const FakeData =[
//     {
//         "id" : 1,
//         imgsrc : pic1,
//         'title' : "Full-Stack Web Development For Beginners",
//         "text": 'Learn Frontend and Backend Web Development Using: HTML, CSS, JAVASCRIPT, NODE, SQL, POSTGRESQL, REACT, RESTful APIs',
//         "price": 39,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith",
//     },
//     {
//         "id" : 2,
//         imgsrc : pic2,
//         'title' : "React JS Course: The Beginners Guide(Step by Step) " ,
//         "text": 'Learn to build React JS Based web applications. Complete Practical classes with Live Project',
//         "price": 28,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 3,
//         imgsrc : pic3,
//         'title' : "The Complete Full-Stack JavaScript Course" ,
//         "text": 'Learn full-stack web development using JavaScript (ReactJS, NodeJS, LoopbackJS, Redux and Material-UI)!',
//         "price": 57,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         id : 4,
//         imgsrc : pic4,
//         'title' : "PHP & MySQL: Certification Course For Beginners" ,
//         "text": 'Learn to Build Database Driven Web Applications using PHP & MySQL',
//         "price": 43,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 5,
//         imgsrc : pic5,
//         'title' : "Adobe Photoshop Course: The Beginners Guide(Step by Step) " ,
//         "text": 'Complete step by step guide to learn Adobe Photoshop from beginner level to an advanced level (Projects Included)',
//         "price": 99,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 6,
//         imgsrc : pic6,
//         'title' : "WordPress Course: Complete Guide(Step by Step) " ,
//         "text": 'Learn to build WordPress websites from scratch. The complete In-Depth Guide to WordPress for Beginners!',
//         "price": 67,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 7,
//         imgsrc : pic1,
//         'title' : "The Complete Front-End Development Course",
//         "text": 'Get started as a front-end web developer using HTML, CSS, JavaScript, jQuery, and Bootstrap!',
//        "price": 58,
//        "email": "support@yahoo.com",
//        "paragraph": "enrich your skills within a very short time by enrolling this course",
//        "review": "This is a highly recommended course for beginners",
//        "Instructors": "Prof. Kevin Smith" 
//     },
//     {
//         "id" : 8,
//         imgsrc : pic2,
//         'title' : "First met React(Only Covers The Basic Fundamentals of React JS)" ,
//         "text": 'Learn to build React JS Based web applications. Complete Practical classes with Live Project',
//         "price": 33,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 9,
//         imgsrc : pic3,
//         'title' : "The Complete Ethical Hacking Course!" ,
//         "text": 'Learn how to get started as a professional hacker with this complete course!',
//         "price": 49,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 10,
//         imgsrc : pic4,
//         'title' : "The Complete Python Hacking Course!" ,
//         "text": 'Learn ethical hacking, penetration testing and network security while working on Python coding projects!',
//         "price": 76,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 11,
//         imgsrc : pic5,
//         'title' : "JavaScript ES6 Course: EcmaScript 6 Complete Guide Line" ,
//         "text": 'Learn the most important parts of modern JavaScript with Complete JavaScript ES6+ Course.',
//         "price": 89,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 12,
//         imgsrc : pic6,
//         'title' : "Adobe Illustrator CC 2020 MasterClass" ,
//         "text": 'Full course of adobe illustrator by a simple way',
//         "price": 44,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 13,
//         imgsrc : pic4,
//         'title' : "Git & Github Crash Course For Absolute Beginners" ,
//         "text": 'Git & GitHub 3 hours Crash Course - Learn key concepts and Workflow of Git & GitHub: STEP by STEP for beginners tutorial',
//        "price": 23,
//        "email": "support@yahoo.com",
//        "paragraph": "enrich your skills within a very short time by enrolling this course",
//        "review": "This is a highly recommended course for beginners",
//        "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 14,
//         imgsrc : pic5,
//         'title' : "Angular 10 Course: Build Angular Apps(Step by Step)" ,
//         "text": 'Get started to build and development Interactive Web apps with Googles very own JavaScript framework Angular 10',
//         "price": 30,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 15,
//         imgsrc : pic6,
//         'title' : "HTML 5 & CSS 3 Course: Complete Guide(Step by Step)" ,
//         "text": 'Learn to Build (RWD) Responsive Websites with HTML5 & CSS3',
//         "price": 94,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
//     {
//         "id" : 16,
//         imgsrc : pic4,
//         'title' : "The Complete Python Hacking Course!" ,
//         "text": 'Learn ethical hacking, penetration testing and network security while working on Python coding projects!',
//         "price": 76,
//         "email": "support@yahoo.com",
//         "paragraph": "enrich your skills within a very short time by enrolling this course",
//         "review": "This is a highly recommended course for beginners",
//         "Instructors": "Prof. Kevin Smith"
//     },
    
    
// ]
// export default FakeData;