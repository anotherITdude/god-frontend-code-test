import { Click, Flex, Text } from "vcc-ui";
import useCars from "../../hooks/useCars";
import useFilter from "./../../hooks/useFilter";

const Filter: React.FC = () => {
  const filterModal = useFilter();
  const { cars } = useCars();
  const unique = [...new Set(cars.map((item) => item.bodyType))];
  const countUnique = (id: string) => {
    return cars.filter((car) => car.bodyType === id).length;
  };
  const handleFilter = (id: string) => {
    if (id) filterModal.updateFilter(id);
    else filterModal.updateFilter("");
  };
  return (
    <Flex>
      <Flex
        role="tablist"
        extend={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Click
          role="tab"
          type="button"
          extend={{
            textUnderlineOffset: "5px",
            textDecorationThickness: "3px",
            textDecorationColor: "#2a609d",
            color: "foreground.secondary",
            textDecoration: `${
              filterModal.currentFilter === "" ? "underline" : ""
            }`,
            
          }}
          onClick={() => handleFilter("")}
        >
        <Text>All ({cars.length})</Text>
        </Click>
        {unique.map((filter, index) => (
          <Click
            role="tab"
            aria-label={filter}
            type="button"
            extend={{
              margin: "10px",
              textUnderlineOffset: "5px",
              textDecorationThickness: "3px",
              textDecoration: `${
                filterModal.currentFilter === filter ? "underline" : ""
              }`,
              textDecorationColor: "#2a609d",
              color: "foreground.secondary",
            }}
            key={index}
            onClick={() => handleFilter(filter)}
          >
            <Text>
              {filter.toLocaleUpperCase()} ({countUnique(filter)})
            </Text>
          </Click>
        ))}
      </Flex>
    </Flex>
  );
};

export default Filter;
