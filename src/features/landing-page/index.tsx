import Avatar from "../../assets/images/fotoexample.jpeg";
import ProjectCard from "../../components/project-card";
import React from "react";

interface Project {
  name: string;
  year: string;
  description: string;
}

const LandingPage = () => {
  // const [increment, setIncrement] = useState<Number>(0);
  // const[toggle, setToggle] = useState<boolean>(false);

  const project: Project[] = [
    {
      name: "Project A",
      year: "2019-2020",
      description: "lorem ipsum",
    },
    {
      name: "Project B",
      year: "2020-2021",
      description: "lorem ipsum",
    },
    {
      name: "Project C",
      year: "2021-2022",
      description: "lorem ipsum",
    },
    {
      name: "Project D",
      year: "2022-2023",
      description: "lorem ipsum",
    },
  ];

  const education: Project[] = [
    {
      name: "SD",
      year: "2007-2013",
      description: "PVDS",
    },
    {
      name: "SMP",
      year: "2014-2017",
      description: "PVDS",
    },
    {
      name: "SMA",
      year: "2018-2020",
      description: "SMAN 7 Bekasi",
    },
    {
      name: "Kuliah",
      year: "2021-2024",
      description: "Unkris",
    },
  ];
  return (
    <div className="flex flex-col">

      <section className="flex flex-row justify-evenly items-center">

        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold">Hello, This is My World</h1>
          <p className="text-3xl text-bold">Timotius Theodearson</p>
        </div>
        <img src={Avatar} className="w-60 rounded-sm my-9" alt="" />
      </section>

      <section className='flex flex-col p-5 px-5 py-10 bg-gray-50 gap-5'>
          <label className="font-semibold text-xl">Summary</label>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores voluptatum non perspiciatis facilis harum veniam nobis ipsa. Voluptates voluptas ratione nisi reiciendis laudantium dolorum. Suscipit consequatur velit accusantium temporibus!</p>
        </section>
        
      <section className="flex flex-col p-5 px-5 py-10 bg-gray-600 gap-5">

        
        <label className="font-semibold text-xl">Project</label>
        {project.map((item: Project, index: number) => (
          <ProjectCard key={index} name={item.name} year={item.year} description={item.description} bgColor={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-100"}`} />
        ))}
      </section>

      <section className="flex flex-col p-5 px-5 py-10 bg-gray-600 gap-5">
        <label className="font-semibold text-lg">Education</label>
        {education.map((item: Project, index: number) => (
          <ProjectCard key={index} name={item.name} year={item.year} description={item.description} bgColor={`${index % 2 === 0 ? "bg-gray-100" : "bg-yellow-50"}`} />
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
