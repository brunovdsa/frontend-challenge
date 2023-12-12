import { SearchIcon } from '../Icons';
import { SearchBarContainer, SearchBtn, SearchInput } from './styles';

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput type='text' placeholder='Search items' />
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </SearchBarContainer>
  );
}
