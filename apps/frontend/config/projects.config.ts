import ProjectType from "../types/project.type";

const projectsConfig: ProjectType[] = [
    {
        title: "Flutter Dependency Adder",
        description:
            "It is a platform to add all your favourite dependencies using a single command.",
        stack: ["Flutter", "Dart", "Netlify"],
        link: "https://github.com/XxThunderBlastxX/flutter_dependency_adder",
    },
    {
        title: "Taskbit",
        description:
            "An android application to streamline task management and enhance your productivity.",
        stack: ["Flutter", "Dart", "Appwrite", "Riverpod"],
        link: "https://github.com/XxThunderBlastxX/taskbit",
    },
    {
        title: "Scribe",
        description:
            "A mobile application for taking short notes on your mobile phone.",
        stack: [
            "Flutter",
            "Dart",
            "Riverpod",
            "Firebase cloud firestore",
            "Firebase authentication",
        ],
        link: "https://github.com/XxThunderBlastxX/scribe",
    },
    {
        title: "Chatting-API",
        description:
            "Websocket based chat application backend written in Go and Pub/Sub(without any package). It uses Redis for caching and MongoDB for storing messages.",
        stack: ["Go", "Redis", "GoFiber", "MongoDB"],
        link: "https://github.com/XxThunderBlastxX/chamting-api",
    },
    {
        title: "Aioli",
        description:
            "It is a CLI based text chat bot to answer your questions powered with Gemini-Pro.",
        stack: ["Go", "urfave/cli", "Gemini-Pro"],
        link: "https://github.com/XxThunderBlastxX/chamting-api",
    },
];

export default projectsConfig;