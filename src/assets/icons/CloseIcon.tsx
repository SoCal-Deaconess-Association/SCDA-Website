const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={800}
        height={800}
        viewBox="0 0 26 26"
        {...props}
        style={{
            filter: "drop-shadow(0 0 10px rgba(54, 55, 58, 0.527))",
            padding: "7px",
        }}
    >
        <path
            d="M4.765 5.112h17.07v15.745H4.765z"
            style={{
                fill: "#eff8f9",
                fillOpacity: 1,
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: 1.08332,
            }}
        />
        <path
            d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0zM18.78 17.394l-1.388 1.387a.654.654 0 0 1-.924 0L13 15.313 9.533 18.78a.653.653 0 0 1-.925-.002L7.22 17.394a.66.66 0 0 1 0-.926l3.468-3.467-3.467-3.467a.657.657 0 0 1 0-.925l1.388-1.388a.651.651 0 0 1 .925 0L13 10.689l3.468-3.468a.65.65 0 0 1 .924 0l1.388 1.386a.66.66 0 0 1 .001.927l-3.468 3.467 3.468 3.467a.66.66 0 0 1-.001.926z"
            style={{
                fill: "#f87d9a",
                fillOpacity: 1,
            }}
        />
    </svg>
)
export default SvgComponent
