import { useState } from "react";
import { Combobox } from "@headlessui/react";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

function SubjectCombobox() {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex">
      <div className="flex flex-col ">
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
          <div className="flex flex-row">
            <Combobox.Input
              className="border rounded-md"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <Combobox.Options className="border ">
            {filteredPeople.map((person) => (
              <Combobox.Option key={person} value={person}>
                {person}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      <div>
        <button className="border ml-2 rounded-lg px-1 ">OK</button>
      </div>
    </div>
  );
}

export default SubjectCombobox;
