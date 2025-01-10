const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Detailed assignments for each role
const assignments = {
  frontend: {
    message: 'Frontend Assignment',
    details:
      'Your task is to build a responsive, single-page web application using React and TailwindCSS. The application should include:\n' +
      '- A homepage showcasing a dynamic list of products fetched from a mock API.\n' +
      '- A product detail page with interactive elements like adding to favorites.\n' +
      '- A responsive navigation bar that adapts to mobile and desktop views.\n' +
      '- At least one custom component with reusable styles.',
  },
  backend: {
    message: 'Backend Assignment',
    details:
      'Develop a RESTful API to manage user authentication and data processing using Node.js and Express.js. The API should include:\n' +
      '- User registration and login functionality with password encryption (use bcrypt).\n' +
      '- Role-based access control for Admin and User roles.\n' +
      '- Endpoints to handle CRUD operations for a resource (e.g., tasks or projects).\n' +
      '- Implementation of JWT for secure authentication.',
  },
  net: {
    message: '.NET Assignment',
    details:
      'Create a .NET Core microservice for an order processing system. The microservice should include:\n' +
      '- A database integration using Entity Framework Core.\n' +
      '- RESTful APIs for creating, updating, and fetching orders.\n' +
      '- Logging and exception handling.\n' +
      '- Unit tests for the service layer.\n' +
      '- Deployment-ready Dockerfile for containerization.',
  },
  cloud: {
    message: 'Cloud Developer Assignment',
    details:
      'Design and deploy a cloud-based solution for hosting a scalable e-commerce application on AWS. Your tasks include:\n' +
      '- Setting up a VPC with public and private subnets.\n' +
      '- Configuring an EC2 instance to serve the backend application and an S3 bucket for static assets.\n' +
      '- Using an RDS instance for the database with security best practices.\n' +
      '- Implementing load balancing using an Application Load Balancer (ALB).\n' +
      '- Documenting all configurations for reproducibility.',
  },
  devops: {
    message: 'DevOps Assignment',
    details:
      'Create a CI/CD pipeline to automate the build, test, and deployment process for a Node.js application. The pipeline should include:\n' +
      '- Integration with GitHub for triggering builds on pull requests.\n' +
      '- Running unit tests and code quality checks.\n' +
      '- Building and pushing Docker images to Docker Hub.\n' +
      '- Deploying the application to a Kubernetes cluster with Helm charts.\n' +
      '- Monitoring the deployment with Prometheus and Grafana.',
  },
  product: {
    message: 'Product Manager Assignment',
    details:
      'Draft a Product Requirement Document (PRD) for a new mobile app feature to enhance user engagement. The PRD should include:\n' +
      '- A clear feature description and its business impact.\n' +
      '- A detailed user flow with wireframes or sketches.\n' +
      '- Success metrics to measure the feature’s performance.\n' +
      '- A timeline for development and rollout phases.\n' +
      '- Risks and mitigation strategies.',
  },
};

// Route to fetch assignment by role
app.get('/assignment/:role', (req, res) => {
  const { role } = req.params;
  const assignment = assignments[role];

  if (assignment) {
    res.json(assignment);
  } else {
    res.status(404).json({ message: 'Role not found', details: '' });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});