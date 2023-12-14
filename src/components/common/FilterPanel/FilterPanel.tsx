import './FilterPanel.css';

export const FilterPanel = () => {
    return (
        <div className="filter-panel">
            <div className="search">
                <img src="/assets/search.svg" alt="Magnifier"/>
                <input type="text" placeholder="Szukaj"/>
            </div>
            <button>
                <img src="/assets/arrow.png" alt="Arrow"/>
                <p>Filtrowanie</p>
            </button>
        </div>
    )
}