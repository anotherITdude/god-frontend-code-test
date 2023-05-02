import { Click, Flex, Spacer, Text } from "vcc-ui";
import useFilter from "./../../hooks/useFilter";

const Filter: React.FC = () => {
  const filters = ["All(18)", "Suv(5)", "Sedan(20)"];
  const filterModal = useFilter();
  const handleFilter = (id: string) => {
    if (id) filterModal.updateFilter(id);
    else filterModal.updateFilter("");
  };
  return (
    <Flex>
      <Flex extend={{ flexDirection: "row", justifyContent: "center" }}>
        {filters.map((filter, index) => (
          <Click
            extend={{
              margin: "5px",
              textUnderlineOffset: "5px",
              textDecoration: `${
                filterModal.currentFilter === filter ? "underline" : ""
              }`,
              textDecorationColor: "#2a609d",

              color: "foreground.secondary",
            }}
            key={index}
            onClick={() => handleFilter(filter)}
          >
            <Text>{filter}</Text>
          </Click>
        ))}
      </Flex>
    </Flex>
  );
};

export default Filter;
