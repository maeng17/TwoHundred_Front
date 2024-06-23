import BasicLayout from "../layouts/BasicLayout.jsx";
import Search from "../components/searchPage/Search.jsx";

function SearchPage() {
    return (
        <BasicLayout>
            <div className="!w-screen bg-white">
                <Search/>
            </div>
        </BasicLayout>
    );
}

export default SearchPage;