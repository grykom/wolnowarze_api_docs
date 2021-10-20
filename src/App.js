import './App.css';
import { Api, ApiItem } from './components/Api';

function App() {
  return (
    <div className="App">
    <header>
        <h1>Wolnowarze API docs</h1>
        <div>
            <h2 className="github__header">github</h2>
            <div className="github__urls">
                <h4><a href="https://github.com/grykom/wolnowarze_frontend">frontend</a></h4>
                <h4><a href="https://github.com/grykom/wolnowarze_backend">backend</a></h4>
                <h4>api-docs</h4>
            </div>
        </div>
    </header>
    <main>
        <Api method="GET" desc="retrieve all recipies" url="v1/recipes" button="get sample data (1 result limit)" apiObj={{"count": 0,"next": null,"previous": null, "results": [{}]}}>
            <h3>Query parameters</h3>
                <ApiItem name="?search={string}" desc="filtering <strong>name</strong>" />
                <ApiItem name="?page={int}" desc="pagination - page number" />
                <ApiItem name="?page_size={int}" desc="pagination - page size <br />(default: 50, max: 100)" />
            <h3>Response schema</h3>
                <ApiItem name="count" desc="int" />
                <ApiItem name="next" desc="string" />
                <ApiItem name="previous" desc="string" />
                <ApiItem name="results" desc="array:" />
                <ApiItem name="recipe_id" desc="int" marginClass={true} />
                <ApiItem name="name" desc="string" marginClass={true} />
                <ApiItem name="slug" desc="string" marginClass={true} />
                <ApiItem name="serving_size" desc="string" marginClass={true} />
                <ApiItem name="preparing_time" desc="string" marginClass={true} />
                <ApiItem name="time_on_high" desc="string" marginClass={true} />
                <ApiItem name="time_on_low" desc="string" marginClass={true} />
                <ApiItem name="recipe_ingredients" desc="string" marginClass={true} />
                <ApiItem name="recipe_how_to" desc="string" marginClass={true} />
                <ApiItem name="images" desc="array" marginClass={true} />
                <ApiItem name="views" desc="int" marginClass={true} />
                <ApiItem name="likes" desc="int" marginClass={true} />
        </Api>
        <Api method="GET" desc="retrieve single recipie" url="v1/recipes/<recipe_id>" real_url="v1/recipes/1" button="get data (recipe_id: 1)">
            <h3>Response schema</h3>
                <ApiItem name="recipe_id" desc="int" />
                <ApiItem name="name" desc="string" />
                <ApiItem name="slug" desc="string" />
                <ApiItem name="serving_size" desc="string" />
                <ApiItem name="preparing_time" desc="string" />
                <ApiItem name="time_on_high" desc="string" />
                <ApiItem name="time_on_low" desc="string" />
                <ApiItem name="recipe_ingredients" desc="string" />
                <ApiItem name="recipe_how_to" desc="string" />
                <ApiItem name="images" desc="array" />
                <ApiItem name="views" desc="int" />
                <ApiItem name="likes" desc="int" />
        </Api>
        <Api method="POST" desc="recipie likes up" url="v1/recipes/<recipe_id>/likes_up" real_url="v1/recipes/1/likes_up" button="get response (recipe_id: 1)">
            <h3>Response schema</h3>
                <ApiItem name="likes" desc="int" />
        </Api>
        <Api method="POST" desc="recipie likes down" url="v1/recipes/<recipe_id>/likes_down" real_url="v1/recipes/1/likes_down" button="get response (recipe_id: 1)">
            <h3>Response schema</h3>
                <ApiItem name="likes" desc="int" />
        </Api>
        <Api method="GET" desc="retrieve one random recipie" url="v1/no_idea_recipes" button="get data response">
            <h3>Query parameters</h3>
                <ApiItem name="?num={int}" desc="get num random recipies" />
            <h3>Response schema</h3>
                <ApiItem name="single recipie" desc="object" />
        </Api>
        <Api method="GET" desc="retrieve why slowcooker data" url="v1/why_slowcooker" button="get data response">
            <h3>Response schema</h3>
                <ApiItem name="heading" desc="string" />
                <ApiItem name="paragraph" desc="string" />
                <ApiItem name="icon" desc="string" />
        </Api>
        <Api method="GET" desc="retrieve nine random gallery data (or one if there is no none receipes)" url="v1/gallery" button="get data response">
            <h3>Response schema</h3>
                <ApiItem name="recipe_id" desc="int" />
                <ApiItem name="name" desc="string" />
                <ApiItem name="slug" desc="string" />
                <ApiItem name="images" desc="array" />

        </Api>
    </main>
    <footer>
        <hr className="footer" />
        <small>v1. last update: 10.2021</small>
    </footer>
    </div>
  );
}

export default App;
