import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import {
  Button, List, ListItem, Image, H1, H2, H3, Paragraph, Link,
  Header, Card, Tabs, TabButtons, TabButton, TabItems, TabItem,
  Dropdown, DropdownTrigger, DropdownBody, DropdownButton, TableRow,
  TableHeader, TableData, Table, Input, Modal
} from "../lib";

const testTabItems = [
  {
    title: "ABCTABTAB",
    contents: (
      <div>
        ABC ABC ABC ABC ABC ABC ABC ABC
        ABC ABC ABC ABC ABC ABC ABC ABC
      </div>
    )
  },
  {
    title: "DEF",
    contents: (
      <div>
        DEF ABC DEF DEF DEF DEF DEF DEF
        DEF DEFDEFDEFDEFDEFDEFDEFDEFDEF
      </div>
    )
  },
  {
    title: "GHIJ",
    contents: (
      <div>
        GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI
        GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI
        GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI
        GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI
      </div>
    )
  }
];
const testImageSrc = "https://onelovemassive.com/wp-content/uploads/2016/10/test-image.png";
const testParagraphText = `Text text Text text Text text Text text Text text Text text
Text textText textText textText textText textText textText textText textText textText
Text textText textText textText textText textText textText textText textText textText
Text textText textText textText textText textText textText textText textText textText
Text textText textText textText textText textText textText textText textText textText
Text textText textText textText textText textText textText textText textText textText
`;

storiesOf("Header", module)
  .add("Simple", () => (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  ));

storiesOf("Card", module)
  .add("Simple", () => (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "lightgray", padding: "20px" }}>
        <Card>
          I am inside a card
        </Card>
        <Card>
          I am a card
        </Card>
        <Card>
          I am another card
        </Card>
        <Card backgroundColor="#0000ff">
          I am a blue card
        </Card>
        <Card backgroundColor="#0000ff" textColor="#fff">
          I am a blue card with white text
        </Card>
      </div>
    </ThemeProvider>
  ));

storiesOf("Typography", module)
  .add("Headers", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <H1>HEADER 1</H1>
        <H2>HEADER 2</H2>
        <H3>HEADER 3</H3>
        <H1 color="#ff0000">Custom Color HEADER 1</H1>
        <H1 center>HEADER 1 CENTERED</H1>
        <H2 center>HEADER 2 CENTERED</H2>
        <H3 center>HEADER 3 CENTERED</H3>
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Paragraph", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Paragraph>{testParagraphText}</Paragraph>
        <Paragraph center>{testParagraphText}</Paragraph>
        <Paragraph justify>{testParagraphText}</Paragraph>
        <Paragraph magnify>{testParagraphText}</Paragraph>
        <Paragraph color="#ff0000">{testParagraphText}</Paragraph>
      </React.Fragment>
    </ThemeProvider>
  ));

storiesOf("Link", module)
  .add("Simple Link", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Link href="/?selectedKind=Link&selectedStory=Simple%20Link">
          My simple link
        </Link>
        {"  "}
      </React.Fragment>
    </ThemeProvider>
  ));

storiesOf("Button", module)
  .add("Normal", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Button small>Small Button</Button>
        <Button>Normal Button</Button>
        <Button large>Large Button</Button>
        <Button uppercase>Normal Uppercase Button</Button>
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Primary", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Button primary small>Small Button</Button>
        <Button primary>Primary Button</Button>
        <Button primary large>Large Button</Button>
        <Button primary uppercase>Primary Button</Button>
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Secondary", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Button secondary small>Small Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button secondary large>Large Button</Button>
        <Button secondary uppercase>Secondary Button</Button>
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Disabled", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Button disabled>Disabled Button</Button>
        <Button disabled uppercase>Disabled Button</Button>
      </React.Fragment>
    </ThemeProvider>
  ));

storiesOf("Image", module)
  .add("Image", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Image
          src={testImageSrc}
          width={200}
          height={100}
        />
      </React.Fragment>
    </ThemeProvider>
  ));

const CustomListItem = () => (
  <React.Fragment>
    <Image
      src={testImageSrc}
      width={200}
      height={100}
    />
    <div style={{
      display: "flex",
      alignItems: "center",
      marginLeft: "10px"
    }}>
      Text Text Text Text Text Text
      Text Text Text Text Text Text
      Text Text Text Text Text Text
    </div>
  </React.Fragment>
);

storiesOf("List", module)
  .add("Text", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <List>
          <ListItem>
            Item
          </ListItem>
          <ListItem>
            Item
          </ListItem>
          <ListItem>
            Item
          </ListItem>
        </List>
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Centered", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <List center>
          <ListItem>
            Item
          </ListItem>
          <ListItem>
            Item
          </ListItem>
          <ListItem>
            Item
          </ListItem>
        </List>
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Custom Component", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
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
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Custom Component Space Around", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
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
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Custom Component Space Between", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
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
      </React.Fragment>
    </ThemeProvider>
  ));

storiesOf("Tabs", module)
  .add("Tabs", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Tabs>
          {({ selectedItem, handleItemClick }) => (
            <React.Fragment>
              <TabButtons>
                {testTabItems.map((item, index) => (
                  <TabButton
                    width={100/testTabItems.length}
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
                  <TabItem
                    key={index}
                    isSelected={selectedItem === index}
                  >
                    {item.contents}
                  </TabItem>
                ))}
              </TabItems>
            </React.Fragment>
          )}
        </Tabs>
      </React.Fragment>
    </ThemeProvider>
  ));

storiesOf("Dropdown", module)
  .add("Dropdown", () => (
    <ThemeProvider theme={theme}>
      <Dropdown withBorder>
        {({ isOpen, handleTriggerClick }) => (
          <React.Fragment>
            <DropdownTrigger onClick={handleTriggerClick}>
              <DropdownButton isOpen={isOpen}>
                Trigger
              </DropdownButton>
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
    </ThemeProvider>
  ));

storiesOf("Table", module)
  .add("Table", () => (
    <ThemeProvider theme={theme}>
      <Table>
        <TableRow>
          <TableHeader>
            header 1
          </TableHeader>
          <TableHeader>
            header 2
          </TableHeader>
          <TableHeader>
            header 3
          </TableHeader>
        </TableRow>
        <TableRow>
          <TableData>
            Data 1
          </TableData>
          <TableData>
            Data 2
          </TableData>
          <TableData>
            Data 3
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>
            Data 1 l2
          </TableData>
          <TableData>
            Data 2 l2
          </TableData>
          <TableData>
            Data 3 l2
          </TableData>
        </TableRow>
      </Table>
    </ThemeProvider>
  ));

storiesOf("Icon", module)
  .add("Icon", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCheckSquare} />
        <Paragraph>
          We should create a library for that. See{" "}
          <Link href="https://github.com/FortAwesome/react-fontawesome" target="_blank">react-fontawesome docs</Link>{" "}
          for more details. In the future future we will create our own icons and remove this.
        </Paragraph>
      </React.Fragment>
    </ThemeProvider>
  ));

storiesOf("Input", module)
  .add("Input Text", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Input placeholder="test" />
        <Input placeholder="test" disabled />
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Input Search", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Input placeholder="Search" type="search" />
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Input Password", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Input placeholder="password" type="password" />
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("Input Number", () => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Input placeholder="number" type="number" />
      </React.Fragment>
    </ThemeProvider>
  ));

class TestModal extends React.Component {
  state = {
    isModalOpen: false
  };
  handleOpenModal = () => this.setState({ isModalOpen: true })
  handleCloseModal = () => this.setState({ isModalOpen: false })
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleOpenModal}>
          Open Modal
        </Button>
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

storiesOf("Modal", module)
  .add("Modal", () => (
    <ThemeProvider theme={theme}>
      <TestModal />
    </ThemeProvider>
  ));
