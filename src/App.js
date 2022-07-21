import * as React from 'react';
import { GoslingComponent } from 'gosling.js';
import CistromeDataFetcher from "./plugin/cistrome-datafetcher";
import { default as hgRegister } from "higlass-register";

// register the custom data-fetcher
hgRegister(
    { dataFetcher: CistromeDataFetcher, config: CistromeDataFetcher.config },
    { pluginType: "dataFetcher", force: true }
);

function App() {
	return (
		<GoslingComponent spec={{
			tracks: [{
				data: {
					type: 'bigwig',
					cid: 1,
					chromSizesUrl: "https://aveit.s3.amazonaws.com/higlass/data/sequence/hg38.chrom.sizes",
					url: 'https://', // TODO: default options that can be lateer removed
				},
				title: 'Gosling Track Based On Plugin Data-Fetcher',
				mark: "bar",
				x: { field: "start", type: "genomic" },
				xe: { field: "end", type: "genomic" },
				y: { field: "value", type: "quantitative", axis: "none" },
				color: { value: "#22908D" },
				tooltip: [
					{ field: "start", type: "genomic" },
					{ field: "end", type: "genomic" },
					{ field: "value", type: "quantitative" },
				],
				style: { outlineWidth: 0 },
				width: 600,
				height: 100
			}]
		}}/>
	);
}

export default App;
