import CardItem from "./card-item";

const ContainerList = () => {
  return (
    <>
      <div className="p-6 grid grid-cols-2 gap-4">
        <CardItem
          title="Sample Title"
          description="Sample description Sample description "
        />
        <CardItem title="Sample Title" description="Sample description" />
        <CardItem title="Sample Title" description="Sample description" />
        <CardItem title="Sample Title" description="Sample description" />
      </div>
    </>
  );
};

export default ContainerList;
