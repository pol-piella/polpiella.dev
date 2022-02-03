export default function Metadata ({ readtime, slug }) { 
    return (
    <div class="flex align-middle gap-1 text-xs flex-wrap">
    <p class="mt-0 mb-2"><b>Read Time: </b>{`📖 ${readtime} minutes`}</p>
    {slug && (
        <div class="flex">
            <p>·</p>
            <a target="_blank" rel="noopener noreferrer" href={`https://github.com/pol-piella/polpiella.dev/edit/main/src/_posts/${slug}.md`}>
                <b>Found a mistake? Edit on Github!</b>
            </a>
        </div>
    )}
    </div>
)}