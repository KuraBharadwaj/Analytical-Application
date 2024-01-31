import {
  Card,
  CardHeader,
  List,
  StandardListItem,
  CustomListItem,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Text,
  Icon,
} from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import dataset from "../data/dataset.json";
import { tableData } from "../data/tableData.tsx";
import { useState } from "react";
import LineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import BarChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";
import { useNavigate } from "react-router-dom";

export function Home() {
  const data = new tableData();
  const navigate = useNavigate();
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);
  const handleHeaderClick = () => {
    if (toggleCharts == "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setToggleCharts("lineChart");
      }, 2000);
    }
  };
  const handleProgressHeaderClick = () => {
    navigate("/detail");
  };
  const handleBPClick = () => {
    navigate("/bp");
  };
  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
      style={spacing.sapUiContentPadding}
    >
      <Card
        header={
          <CardHeader
            titleText={toggleCharts === "lineChart" ? "lineChart" : "BarChart"}
            interactive
            onClick={handleHeaderClick}
            avatar={
              <Icon
                name={
                  toggleCharts === "lineChart" ? LineChartIcon : BarChartIcon
                }
              ></Icon>
            }
          ></CardHeader>
        }
        id="MyApp-card1"
        style={{ ...spacing.sapUiContentPadding }}
      >
        <Text style={spacing.sapUiContentPadding}>
          This is the content area of the Card.
        </Text>
        {toggleCharts === "lineChart" ? (
          <LineChart
            measures={[{ accessor: "data", label: "Average Temperature" }]}
            dimensions={[{ accessor: "month" }]}
            dataset={dataset}
            loading={loading}
          />
        ) : (
          <BarChart
            measures={[{ accessor: "data", label: "Average Temperature" }]}
            dimensions={[{ accessor: "month" }]}
            dataset={dataset}
            loading={loading}
          />
        )}
      </Card>
      <Card
        onClick={handleProgressHeaderClick}
        id="MyApp-card2"
        style={{ ...spacing.sapUiContentPadding }}
        header={
          <CardHeader
            titleText="Progress"
            subtitleText="List"
            avatar={<Icon name="add" />}
          />
        }
      >
        <List>
          <StandardListItem
            additionalText="finished"
            additionalTextState={ValueState.Success}
          >
            <Text>Activity 1</Text>
          </StandardListItem>
          <StandardListItem
            additionalText="failed"
            additionalTextState={ValueState.Error}
          >
            <Text>Activity 2</Text>
          </StandardListItem>
          <CustomListItem>
            <ProgressIndicator value={89} valueState={ValueState.Success} />
          </CustomListItem>
          <CustomListItem>
            <ProgressIndicator value={5} valueState={ValueState.Error} />
          </CustomListItem>
          <CustomListItem>
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{
                width: "100%",
                ...spacing.sapUiSmallMarginTopBottom,
              }}
            >
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                  Activity 3
                </Text>
                <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                  in Progress
                </Text>
              </FlexBox>
              <ProgressIndicator
                value={89}
                valueState={ValueState.Success}
                style={{ ...spacing.sapUiTinyMarginTop }}
              />
            </FlexBox>
          </CustomListItem>
          <CustomListItem>
            <FlexBox
              direction={FlexBoxDirection.Column}
              style={{
                width: "100%",
                ...spacing.sapUiSmallMarginTopBottom,
              }}
            >
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                <Text>Actvity 4</Text>
                <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                  in Progress
                </Text>
              </FlexBox>
              <ProgressIndicator value={5} valueState={ValueState.Error} />
            </FlexBox>
          </CustomListItem>
        </List>
      </Card>
      <Card
        id="MyApp-card3"
        style={{ ...spacing.sapUiContentPadding }}
        onClick={handleBPClick}
        header={
          <CardHeader
            titleText="Business Partners"
            subtitleText="Application"
          ></CardHeader>
        }
      ></Card>
      <Card
        header={
          <CardHeader
            titleText="Analytical Table"
            avatar={<Icon name={tableViewIcon} />}
          ></CardHeader>
        }
      >
        <AnalyticalTable
          data={data.tableRandomData}
          columns={data.tableColumns}
          visibleRows={5}
        />
      </Card>
    </FlexBox>
  );
}
