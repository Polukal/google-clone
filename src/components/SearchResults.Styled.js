import { styled } from "@mui/system";

const SearchResultsContainer = styled("div")`
max-width: 650px;
margin-left: 107px;
margin-bottom: 100px;
top: 140px;
position: fixed;
width: 100vw;
height: 100vh;
overflow-y: scroll;
overflow-x: hidden;
::-webkit-scrollbar {
    diplay:none;
}
`;

const SearchResultWrapper = styled("div")`
display: flex;
align-items: center;
justify-content: space-between;
margin: 48px 0;
`;

const SearchResultTitle = styled("a")`
text-decoration: none;
img {
    object-fit: contain;
    height: 24px;
    width: 24px;
    margin-right: 10px;
}
&:hover {
    text-decoration: underline;
    color: blue;
}
`;

export { SearchResultTitle, SearchResultWrapper, SearchResultsContainer};