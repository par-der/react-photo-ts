import {Autocomplete, CircularProgress, TextField} from "@mui/material";

interface SearchInputProps {
    search: string;
    setSearch: (value: string) => void;
    options: string[];
    loading?: boolean;
}

const SearchInput = ({search, setSearch, options, loading = false}: SearchInputProps) => {
    return (
        <Autocomplete
            options={options}
            freeSolo
            inputValue={search}
            onInputChange={(_, newValue) => setSearch(newValue)}
            renderInput={(params) => <TextField {...params} label="Поиск" InputProps={{
                ...params.InputProps,
                endAdornment: (
                        <>
                            {loading ? <CircularProgress size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </>
                    ),
                }}
            />
            }
        />
    );
};

export default SearchInput;