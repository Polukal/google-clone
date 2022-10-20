import React from "react";
import {
    SearchResultsContainer,
    SearchResultTitle,
    SearchResultWrapper
} from "./SearchResults.Styled";
import { Typography, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { fontWeight } from "@mui/system";


const SearchResults = ({data = {}}) => {
    return (
        <SearchResultsContainer>
            <Typography
            variant='p'
            component='p'
            sx={{
                whiteSpace: "nowrap",
                fontFamily: "Google Sans,Roboto,arial,sans-serif",
                paddingTop: "8px",
                fontSize: "0.875rem",
                color: "rgba(0, 0, 0, 0.87)"
            }}
            >
                About {data?.searchInformation?.formattedTotalResults} results {""}
                {data?.searchInformation?.searchTime} seconds
                
            </Typography>

            {
                data?.items?.map((item) => (
                    <SearchResultWrapper key={item?.cacheId}>
                        <div>
                            <SearchResultTitle href={item?.link}>
                                {item?.pagemap?.cse_image?.length > 0 &&
                                 item?.pagemap?.cse_image[0]?.src && (
                                    <img src={item?.pagemap?.cse_image[0]?.src} alt='thumbnail' />
                                 )}
                                 <Typography
                                 variant='p'
                                 component='p'
                                 sx={{
                                    color: 'rgba(0, 0, 0, 0.87)',
                                    fontWeight: "400",
                                    fonSize: "0.875rem",
                                 }}
                                 >
                                    {item?.displayLink}
                                 </Typography>
                            </SearchResultTitle>
                            <SearchResultTitle href={item?.link}>
                                <Typography
                                    variant="h3"
                                    component='h3'
                                    sx={{
                                        color: 'blue',
                                        fontWeight: '400',
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    {item?.title}
                                </Typography>
                            </SearchResultTitle>
                            <Typography
                                variant="body1"
                                component='body1'
                                sx={{
                                    marginTop: "16px",
                                    color: 'rgba(0, 0, 0, 0.87)',
                                    fontWeight: 'normal',
                                    fontSize: "0.875rem",
                                    fontFamily: "Roboto, sans-serif",
                                }}
                            >
                                {item?.snippet}
                            </Typography>
                        </div>
                        <div>
                            <IconButton>
                                <MoreVertIcon sx={{ fontSize: "0.875rem", color:"rgba(0, 0, 0, 0.87)" }} />
                            </IconButton>
                        </div>
                    </SearchResultWrapper>
                ))
            }

        </SearchResultsContainer>
    )
}

export default SearchResults