

export function renderLicenseBadge(license) {
  if (!license || license === "None") {
      return ""; 
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}


export function renderLicenseLink(license) {
  if (!license || license === "None") {
      return ""; 
  }

  const licenseLinks = {
      MIT: "https://opensource.org/licenses/MIT",
      "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
      GPL: "https://www.gnu.org/licenses/gpl-3.0",
      BSD: "https://opensource.org/licenses/BSD-3-Clause",
  };

  return licenseLinks[license] || ""; 
}


export function renderLicenseSection(license) {
  if (!license || license === "None") {
      return ""; 
  }

  const licenseLink = renderLicenseLink(license);
  return `## License

This project is licensed under the [${license}](${licenseLink}) license.`;
}



export function renderTechnologies(technologies) {
  if (!technologies || technologies.length === 0) {
      return "";
  }

  const technologiesList = technologies.map((tech) => `- ${tech}`).join("\n");
  return `## Technologies Used

The following technologies were used in this project:

${technologiesList}`;
}