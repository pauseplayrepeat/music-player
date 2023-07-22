import getSongsByTitle from '@/actions/getSongsByTitle';
import Header from '@/components/Header';
import SearchContent from '@/app/search/components/SearchContent';
import SearchInput from '@/components/SearchInput';
import SpotifyAuthModal from './components/SpotifyAuthModal';
import Button from '@/components/Button'; // Adjust this import based on your Button component's location.
import useAuthModal from '@/hooks/useAuthModal';

interface SearchProps {
    searchParams: {
        title: string;
    }
};

const SpotifyPage = ({ searchParams }: SearchProps) => {

    return (
        <div className="
            bg-neutral-900
            rounded-lg
            h-full
            w-full
            overflow-hidden
            overflow-y-auto
        ">
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <SpotifyAuthModal />
                </div>
            </Header>
        </div>
    );
}

export default SpotifyPage;
