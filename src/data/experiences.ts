import { IExperience } from "./types";

const experiences: Array<IExperience> = [
  {
    company: "Cognolgix Technology",
    role: "FullStack Engineer Intern",
    work: [
      "Contributed in the design and deployment of robust full-stack applications leveraging Java (Spring Boot), Golang delivering modular, high-efficiency systems with seamless RESTful API integration through Swagger UI.",
      "Established secure and scalable authentication and authorization mechanisms using JWT/OAuth2 and AWS Cognito, reinforcing data confidentiality and enabling unified user access across multiple microservices.",
      "Administered and fine-tuned PostgreSQL and MySQL databases, improving data reliability, optimizing query execution, and supporting uninterrupted performance in production-grade environments.",
      "Integrated SendGrid to automate transactional email workflows, enhancing system interactivity and ensuring prompt communication within cloud-based ecosystems.",
      "Containerized applications through Docker, achieving consistent runtime environments and optimizing CI/CD pipelines for accelerated, error-free deployments across various environments.",
      "Diagnosed and mitigated Trivy vulnerability findings in production-grade Docker images, fortifying container infrastructure and strengthening overall application resilience.",
      "Implemented end-to-end system observability using Grafana, InfluxDB, and Telegraf, facilitating continuous performance tracking, insightful visualization, and data-driven operational decisions.",
      "Collaborated effectively with cross-functional teams in an Agile setup, performing in-depth code reviews, managing Git/GitHub version control processes, and ensuring delivery of maintainable, secure, and high-quality software solutions.",
    ],
    joining_date: "September 2025",
    ending_date: "Present",
  },
  {
    company: "People Prudent Consulting and HR Solutions",
    role: "FullStack Engineer Intern",
    work: [
      "Spearheaded the development of a full-stack survey application using React.js, Node.js, and Azure, automating survey creation and reducing manual effort by 30%, leading to improved data collection efficiency.",
      "Integrated Nodemailer to send personalized survey invitations, leveraging Azure DevOps for scalable email handling. This streamlined the survey distribution process and boosted response rates, enhancing operational efficiency by 25%.",
      "Developed and optimized RESTful APIs using Express.js and MongoDB, ensuring seamless data flow between the frontend and backend",
      "Implemented secure authentication and authorization using JWT, ensuring restricted access to survey data based on user roles, enhancing compliance and data integrity.",
      "Deployed the survey application using Azure App Service and automated deployment pipelines via Azure DevOps, ensuring high system uptime, reducing deployment time, and facilitating seamless updates without service disruptions.",
      "Engineered real-time analytics dashboards leveraging React.js,Chart.js and MongoDB Aggregation Framework, enabling business leaders to derive actionable insights from survey responses, aiding strategic decision-making.",
    ],
    joining_date: "August 2024",
    ending_date: "February 2024",
  },
  {
    company: "Brainly Beam Info Tech",
    role: "Frontend Intern",
    work: [
      "Designed an engaging React.js frontend using Tailwind CSS, ensuring a highly intuitive and visually appealing interface that improved customer engagement by 30%.",
      "Implemented React Router to create a smooth, multi-page browsing experience, optimizing page transitions and improving overall user flow for effortless navigation.",
      "Engineered an advanced search functionality with dynamic filters, reducing search time by 40%, enabling users to find their ideal rental vehicle quickly and efficiently.",
      "Integrated secure authentication and an intuitive booking process, increasing customer satisfaction by 30% and boosting conversion rates by 20% through a seamless rental experience.",
      "Developed a React state management-driven vehicle comparison tool, allowing users to compare pricing, features, and rental terms side-by-side for informed decision-making.",
      "Ensured a fully responsive design with Tailwind CSS, delivering a fast-loading, mobile-friendly experience that catered to users across various devices.",
    ],
    joining_date: "June 2024",
    ending_date: "July 2024",
  },
];

export default experiences;
