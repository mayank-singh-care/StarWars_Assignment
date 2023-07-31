import React from "react";
import Dropdown from "./Dropdown";
import ListLoading from "./ListLoading";

const headings = {
  Films: ["Title", "Release Date", "Director"],
  People: ["Name", "Birth Year", "Species"],
  Planets: ["Name", "Climate", "Gravity"],
  Species: ["Name", "Homeworld", "Average Lifespan"],
  Starships: ["Name", "Model", "Hyperdrive Rating"],
  Vehicles: ["Name", "Model", "Top speed"],
};

function ListView(props) {
  // useEffect(() => {
  //   if (props.category === "People" && props.data) {
  //     Promise.all(
  //       props.data.map(async (el) => {
  //         if (el.third)
  //           await axios.get(el.third).then((response) => {
  //             el.third = response.data.name;
  //           });
  //         return el;
  //       })
  //     ).then((results) => {
  //       console.log(results);
  //       props.setData(results);
  //     });
  //   }
  // }, [props]);
  console.log(props.data, props.category);
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="list">
        <thead>
          <tr>
            {headings[props.category].map((h, id) => (
              <th scope="col" key={id}>
                {h}
              </th>
            ))}
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {!props.isLoading ? (
            props.data.map((el, id) => (
              <tr key={id}>
                <td>{el.first}</td>
                <td>{el.second}</td>
                <td>{el.third}</td>
                <td>
                  <Dropdown
                    data={props.data}
                    details={props.details}
                    setDetails={props.setDetails}
                    id={id}
                    category={props.category}
                    setData={props.setData}
                  />
                </td>
              </tr>
            ))
          ) : (
            <ListLoading rowsNum={5} colsNum={4} />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListView;
