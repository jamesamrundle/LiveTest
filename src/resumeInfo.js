export let data = {
main:{
    name: "James Rundle",
    bio: "Hi " +
        "I am " +
        "James Rundle,\n" +
        "Chef/Pastry Chef turned programmer, \n" +
        "I specialize in Java and React and have an interest in Arduinos/Raspberry Pi for hardware level coding",

        address:{
        street: "5182 Cabanne Ave.",
            city: "St. Louis",
            state: "Missouri",
            zip: "63113",
    },
    phone: "816-679-3017",
        email: "jamesamrundle@gmail.com",
        image: "./images/MYFACE.jpg",

        objective: "Interested in securing a challenging internship in which I leverage/expand my coding skills and exercise my creative problem-solving abilities",
        occupation: "Aspiring Software Developer"

},
resume:{

    education: [
        {
        name: "University of Missouri St. Louis",
        degreeAndGpa: "Bachelors of Computer Science,  3.5 GPA  ",
        year: "2020",
        complete:false,
        description: " Transfered to UMSL Fall '19 for an expedited graduation schedule, an offer for a part time continuation of Summer '19 internship during the school year, and a job market more inline with my career interests. "
    },
        {
        name: "College of Charleston",
        degreeAndGpa: "Bachelors of Computer Science,  3.5 GPA  ",
        year: "2021",
        complete:false,
        description: "As a non traditional student I secured a multiple Summer internship at Boeing during my first semester. In consequent semester I maintained active involvment and leadership in department clubs and was lead developer on the M^3 project in Dr. Bowrings research lab.  "
    },
        {
            name: "Johnson County Community College",
            degreeAndGpa: "Associates in Culinary Arts,  3.2 GPA  ",
            year: "2014",
            complete:true,
            description:   "Completed degree while working full time and apprenticing 2000+ hours under certified Chefs. Captained Knowledge Bowl team and coordinated fundraisers and volunteer missions."
        }
    ],
    jobs: [
        {
            company: "Boeing Defense and Space",
            date: "May 2019-Current",
            title: "Operational Analyst Intern",
            description: "Develop a simulation of scenario involving Armed Forces and analyze performance using both statistical and observational methods.\nAssisted outside team during school year 2019-2020 on development of Automated Testing Environment using opensource software ."
        },
        {
            company: "College of Charleston \n CIRDLES Research Lab",
            date: "Oct 2018 - May 2019",
            title: "Research Assistant",
            description: "Lead development on react based application to generate dynamic Javascript in browser, that is then used our MARSx program"
        },
        {
            company: "Boeing",
            date: "May-Aug 2018",
            title: "Programmer Analyst Intern",
            description: "Support and enrich a Commerical-Off-The-Shelf Software with patches, bugfixes and extensions. Coordinated efforts with multiple branches for implementation of App Dynamics to gain metrics on performance and scalability."
        }
    ],
    skills:[
        {name:"Java",level:"65%"},
        {name: "Python", level:"70%"},
        {name: "React", level:"60%"},
        {name: "C",level:"43%"},
        {name: "Confections and Sweet-craft", level:"80%"}
    ]
}


}
