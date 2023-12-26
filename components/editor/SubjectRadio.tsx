import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function SubjectRadio() {
  let [subject, setSubject] = useState("Música");

  return (
    <div className="w-full">
      <RadioGroup
        value={subject}
        onChange={setSubject}
        className="flex flex-row justify-between border"
      >
        <RadioGroup.Label className="font-bold">Tópico: </RadioGroup.Label>
        <RadioGroup.Option value="musica">
          {({ checked }) => (
            <span className={checked ? "bg-blue-200 border" : ""}>Música</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="filme">
          {({ checked }) => (
            <span className={checked ? "bg-blue-200 border" : ""}>Filme</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="serie">
          {({ checked }) => (
            <span className={checked ? "bg-blue-200 border" : ""}>Série</span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    </div>
  );
}
export default SubjectRadio;
