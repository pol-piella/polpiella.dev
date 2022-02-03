const SOCIAL_MEDIA = [
    { asset: "/assets/github.svg", url: "https://github.com/pol-piella" },
    { asset: "/assets/linkedin.svg", url: "https://www.linkedin.com/in/pol-piella-81b846115/" },
    { asset: "/assets/twitter.svg", url: "https://twitter.com/polpielladev" },
]

export default function Footer() {
    return (
        <footer class="flex flex-col mt-16 align-middle bg-gray-100 mb-0 dark:bg-gray-800">
            <div class="flex align-middle justify-center mt-5 mb-7 gap-8" >
                {SOCIAL_MEDIA.map(social => <a class="hover:scale-110 transition-transform dark:invert" target="_blank" rel="noopener noreferrer" href={social.url}><img width="25px" height="25px" src={social.asset} /></a>)}
            </div>
            <p class=" text-center text-gray-600 mb-1 dark:text-gray-300">Made with 💛 by Pol Piella Abadia</p>
            <p class=" text-center text-gray-600 mb-5 dark:text-gray-300">Code block font: <a class="underline font-bold hover:text-amber-500 decoration-amber-400 decoration-wavy" href="https://www.monolisa.dev/buy" target="_blank" rel="noopener noreferrer">MonoLisa</a></p>
        </footer>
    )
}