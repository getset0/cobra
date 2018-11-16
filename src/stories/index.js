import React from "react";
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  List,
  ListItem,
  Image,
  H1,
  H2,
  H3,
  Paragraph,
  Link,
  Header,
  Card,
  Tabs,
  TabButtons,
  TabButton,
  TabItems,
  TabItem,
  Dropdown,
  DropdownTrigger,
  DropdownBody,
  DropdownButton,
  TableRow,
  TableHeader,
  TableData,
  Table,
  Input,
  Modal,
  Message
} from "../lib";

const testTabItems = [
  {
    title: "ABCTABTAB",
    contents: (
      <div style={{ backgroundColor: "red" }}>
        <h1>I AM HUGE</h1>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
      </div>
    )
  },
  {
    title: "DEF",
    contents: (
      <div style={{ backgroundColor: "blue" }}>
        DEF ABC DEF DEF DEF DEF DEF DEF DEF DEFDEFDEFDEFDEFDEFDEFDEFDEF
      </div>
    )
  },
  {
    title: "GHIJ",
    contents: (
      <div style={{ backgroundColor: "yellow" }}>
        GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI
        GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI
      </div>
    )
  }
];
const testImageSrc =
  "https://onelovemassive.com/wp-content/uploads/2016/10/test-image.png";
const testParagraphText = `Text text Text text Text text Text text Text text Text text
Text textText textText textText textText textText textText textText textText textText
Text textText textText textText textText textText textText textText textText textText
Text textText textText textText textText textText textText textText textText textText
Text textText textText textText textText textText textText textText textText textText
Text textText textText textText textText textText textText textText textText textText
`;

storiesOf("Header", module)
  .add("Simple", () => <Header />)
  .add("Dropdown", () => (
    <Header
      headerCustomRight={
        <Dropdown withBorder>
          {({ isOpen, handleTriggerClick }) => (
            <React.Fragment>
              <DropdownTrigger onClick={handleTriggerClick}>
                <DropdownButton isOpen={isOpen}>Trigger</DropdownButton>
              </DropdownTrigger>
              <DropdownBody isOpen={isOpen}>
                <List>
                  <ListItem onClick={() => console.log("item1")}>
                    item1
                  </ListItem>
                  <ListItem onClick={() => console.log("item2")}>
                    item2
                  </ListItem>
                  <ListItem onClick={() => console.log("item3")}>
                    item3
                  </ListItem>
                  <ListItem onClick={() => console.log("item4")}>
                    item4
                  </ListItem>
                </List>
              </DropdownBody>
            </React.Fragment>
          )}
        </Dropdown>
      }
    />
  ));

storiesOf("Card", module)
  .add("Simple", () => (
    <div style={{ padding: "20px" }}>
      <Card>I am inside a card</Card>
      <Card>I am a card</Card>
      <Card>I am another card</Card>
      <Card backgroundColor="#0000ff">I am a blue card</Card>
      <Card backgroundColor="#0000ff" textColor="#fff">
        I am a blue card with white text
      </Card>
    </div>
  ))
  .add("Dark Background", () => (
    <div style={{ backgroundColor: "lightgray", padding: "20px" }}>
      <Card>I am inside a card</Card>
      <Card>I am a card</Card>
      <Card>I am another card</Card>
      <Card backgroundColor="#0000ff">I am a blue card</Card>
      <Card backgroundColor="#0000ff" textColor="#fff">
        I am a blue card with white text
      </Card>
    </div>
  ));

storiesOf("Typography", module)
  .add("Headers", () => (
    <React.Fragment>
      <H1>HEADER 1</H1>
      <H2>HEADER 2</H2>
      <H3>HEADER 3</H3>
      <H1 color="#ff0000">Custom Color HEADER 1</H1>
      <H1 center>HEADER 1 CENTERED</H1>
      <H2 center>HEADER 2 CENTERED</H2>
      <H3 center>HEADER 3 CENTERED</H3>
    </React.Fragment>
  ))
  .add("Paragraph", () => (
    <React.Fragment>
      <Paragraph>{testParagraphText}</Paragraph>
      <Paragraph center>{testParagraphText}</Paragraph>
      <Paragraph justify>{testParagraphText}</Paragraph>
      <Paragraph magnify>{testParagraphText}</Paragraph>
      <Paragraph color="#ff0000">{testParagraphText}</Paragraph>
    </React.Fragment>
  ));

storiesOf("Link", module).add("Simple Link", () => (
  <Link href="/?selectedKind=Link&selectedStory=Simple%20Link">
    My simple link
  </Link>
));

storiesOf("Message", module).add("Messages", () => (
  <React.Fragment>
    <Message text="I am a default" />
    <Message text="I am a warning" type="warning" />
    <Message text="I am a success" type="success" />
    <Message text="I am an error" type="error" />
    <Message text="Test" width={100} />
  </React.Fragment>
));
storiesOf("Button", module)
  .add("Normal", () => (
    <React.Fragment>
      <Button small>Small Button</Button>
      <Button>Normal Button</Button>
      <Button large>Large Button</Button>
      <Button uppercase>Normal Uppercase Button</Button>
    </React.Fragment>
  ))
  .add("Primary", () => (
    <React.Fragment>
      <Button primary small>
        Small Button
      </Button>
      <Button primary>Primary Button</Button>
      <Button primary large>
        Large Button
      </Button>
      <Button primary uppercase>
        Primary Button
      </Button>
    </React.Fragment>
  ))
  .add("Secondary", () => (
    <React.Fragment>
      <Button secondary small>
        Small Button
      </Button>
      <Button secondary>Secondary Button</Button>
      <Button secondary large>
        Large Button
      </Button>
      <Button secondary uppercase>
        Secondary Button
      </Button>
    </React.Fragment>
  ))
  .add("Disabled", () => (
    <React.Fragment>
      <Button disabled>Disabled Button</Button>
      <Button disabled uppercase>
        Disabled Button
      </Button>
    </React.Fragment>
  ));

storiesOf("Image", module).add("Image", () => (
  <Image src={testImageSrc} width={200} height={100} />
));

const CustomListItem = () => (
  <React.Fragment>
    <Image src={testImageSrc} width={200} height={100} />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "10px"
      }}
    >
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text
    </div>
  </React.Fragment>
);

storiesOf("List", module)
  .add("Text", () => (
    <List>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add("Centered", () => (
    <List center>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add("Custom Component", () => (
    <List>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
    </List>
  ))
  .add("Custom Component Space Around", () => (
    <List spaceAround>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
    </List>
  ))
  .add("Custom Component Space Between", () => (
    <List spaceBetween>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
    </List>
  ));

storiesOf("Tabs", module).add("Tabs", () => (
  <Tabs>
    {({ selectedItem, handleItemClick }) => (
      <React.Fragment>
        <TabButtons>
          {testTabItems.map((item, index) => (
            <TabButton
              width={100 / testTabItems.length}
              key={item.title}
              isSelected={selectedItem === index}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </TabButton>
          ))}
        </TabButtons>
        <TabItems>
          {testTabItems.map((item, index) => (
            <TabItem key={index} isSelected={selectedItem === index}>
              {item.contents}
            </TabItem>
          ))}
        </TabItems>
      </React.Fragment>
    )}
  </Tabs>
));

storiesOf("Dropdown", module).add("Dropdown", () => (
  <Dropdown withBorder isOpen>
    {({ isOpen, handleTriggerClick }) => (
      <React.Fragment>
        <DropdownTrigger onClick={handleTriggerClick}>
          <DropdownButton isOpen={isOpen}>Trigger</DropdownButton>
        </DropdownTrigger>
        <DropdownBody isOpen={isOpen}>
          <List>
            <ListItem onClick={() => console.log("item1")}>item1</ListItem>
            <ListItem onClick={() => console.log("item2")}>item2</ListItem>
            <ListItem onClick={() => console.log("item3")}>item3</ListItem>
            <ListItem onClick={() => console.log("item4")}>item4</ListItem>
          </List>
        </DropdownBody>
      </React.Fragment>
    )}
  </Dropdown>
));

storiesOf("Table", module).add("Table", () => (
  <Table>
    <TableRow>
      <TableHeader>header 1</TableHeader>
      <TableHeader>header 2</TableHeader>
      <TableHeader>header 3</TableHeader>
    </TableRow>
    <TableRow>
      <TableData>Data 1</TableData>
      <TableData>Data 2</TableData>
      <TableData>Data 3</TableData>
    </TableRow>
    <TableRow>
      <TableData>Data 1 l2</TableData>
      <TableData>Data 2 l2</TableData>
      <TableData>Data 3 l2</TableData>
    </TableRow>
  </Table>
));

storiesOf("Icon", module).add("Icon", () => (
  <React.Fragment>
    <FontAwesomeIcon icon={faCoffee} />
    <FontAwesomeIcon icon={faCheckSquare} />
    <Paragraph>
      We should create a library for that. See{" "}
      <Link
        href="https://github.com/FortAwesome/react-fontawesome"
        target="_blank"
      >
        react-fontawesome docs
      </Link>{" "}
      for more details. In the future future we will create our own icons and
      remove this.
    </Paragraph>
  </React.Fragment>
));

storiesOf("Input", module)
  .add("Input Text", () => (
    <React.Fragment>
      <Input placeholder="test" />
      <Input placeholder="test" disabled />
    </React.Fragment>
  ))
  .add("Input Search", () => <Input placeholder="Search" type="search" />)
  .add("Input Password", () => <Input placeholder="password" type="password" />)
  .add("Input Number", () => <Input placeholder="number" type="number" />);

class TestModal extends React.Component {
  state = {
    isModalOpen: false
  };
  handleOpenModal = () => this.setState({ isModalOpen: true });
  handleCloseModal = () => this.setState({ isModalOpen: false });
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleOpenModal}>Open Modal</Button>
        <Modal
          isOpen={this.state.isModalOpen}
          handleCloseModal={this.handleCloseModal}
          title="I am a modal title"
        >
          I am a modal content!
        </Modal>
      </React.Fragment>
    );
  }
}

storiesOf("Modal", module).add("Modal", () => <TestModal />);
