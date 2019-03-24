export let data = {
main:{
    name: "James Rundle",
        bio: "Hi " +
    "I am " +
    "James\n" +
    "I like programming!\n" +
    ` \n3 time semi-pro tummy-stick league champion, midwest division`,

        address:{
        street: "123 Drury Lane",
            city: "Seattle",
            state: "Washington",
            zip: "67460",
    },
    phone: "111-222-3333",
        email: "jamesamrundle@gmail.com",
        image: "./images/MYFACE.jpg",

        objective: "Interested in securing an internship in which I both leverage and expand my coding skills",
        occupation: "Aspiring Software Developer"

},
resume:{

    education: [{
        name: "College of Charleston",
        degreeAndGpa: "Bachelors of Computer Science : 3.5 ",
        year: "2021",
        description: "As a non traditional student I secured a multiple Summer internship at Boeing during my first semester. In consequent semester I maintained active involvment and leadership in department clubs and was lead developer on the M^3 project in Dr. Bowrings research lab.  "
    }
    ],
    jobs: [
        {
            company: "Serta",
            date: "2007 - 2015",
            title: "Cheif Quaility Assurance Officer, Pillow Division",
            description: "Rigourously testing pillows up to 10,000 successive face plants to ensure maximum integrity and analyze cool-side capacity thresholds"
        },
        {
            company: "Lego",
            date: "2017- current",
            title: "Materials engineer",
            description: "Used non-euclidian geometry, 6th dimensional cthonic sorcery and precalculus to increase foot-pain-infliction by .427 percent"
        }
    ],
    skills:[
        {name:"Java Brewing",level:"60%"},
        {name: "Python Charming", level:"55%"},
        {name: "PHPhuck dat", level:"-70%"},
        {name: "Spelling words comprised of the letter 'C'",level:"23%"},
        {name: "Confections and Sweet-craft", level:"80%"}
    ]
}


}