import type { ImageReplaceVoiceData } from "../ChatPortraitModels";
import CONSTANTS from "../constants";

export default {
	SYSTEM_ID: "pf2e",
	imageReplacerDamageType: <ImageReplaceVoiceData[]>[],
	imageReplacerWeaponProperties: <ImageReplaceVoiceData[]>[],
	imageReplacerIconizer: <ImageReplaceVoiceData[]>[
		// { name : 'PF2E.AbilityBoost', icon : `Ability Boost",
		// { name : 'PF2E.AbilityBoostLevels', icon : `Ability Boost Levels",
		{ name: "PF2E.AbilityCha", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/charisma.svg` },
		{ name: "PF2E.AbilityCon", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/constitution.svg` },
		{ name: "PF2E.AbilityDex", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/dexterity.svg` },
		{ name: "PF2E.AbilityFlaw", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/flaw.svg` },
		{ name: "PF2E.AbilityInt", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/intelligence.svg` },
		// { name : 'PF2E.AbilityModifierLabel', icon : `Ability Modifier",
		// { name : 'PF2E.AbilityScoresHeader', icon : `Ability Scores",
		{ name: "PF2E.AbilityFree", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/free.svg` },
		{ name: "PF2E.AbilityStr", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/strength.svg` },
		// { name : 'PF2E.AbilityTitle', icon : `Ability",
		{ name: "PF2E.AbilityWis", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/wisdom.svg` },

		{ name: "PF2E.AbilityCheck.str", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/strength.svg` },
		{ name: "PF2E.AbilityCheck.dex", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/dexterity.svg` },
		{ name: "PF2E.AbilityCheck.con", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/constitution.svg` },
		{ name: "PF2E.AbilityCheck.int", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/intelligence.svg` },
		{ name: "PF2E.AbilityCheck.wis", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/wisdom.svg` },
		{ name: "PF2E.AbilityCheck.cha", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/charisma.svg` },

		{ name: "PF2E.ActionsCheck.acrobatics", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/acrobatics.svg` },
		{ name: "PF2E.ActionsCheck.arcana", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/arcana.svg` },
		{ name: "PF2E.ActionsCheck.athletics", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/athletics.svg` },
		{ name: "PF2E.ActionsCheck.crafting", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/crafting.svg` },
		{ name: "PF2E.ActionsCheck.deception", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/deception.svg` },
		{ name: "PF2E.ActionsCheck.diplomacy", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/diplomacy.svg` },
		{ name: "PF2E.ActionsCheck.intimidation", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/intimidation.svg` },
		{ name: "PF2E.ActionsCheck.medicine", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/medicine.svg` },
		{ name: "PF2E.ActionsCheck.nature", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/nature.svg` },
		{ name: "PF2E.ActionsCheck.occultism", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/occultism.svg` },
		{ name: "PF2E.ActionsCheck.perception", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/perception.svg` },
		{ name: "PF2E.ActionsCheck.performance", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/performance.svg` },
		{ name: "PF2E.ActionsCheck.religion", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/religion.svg` },
		{ name: "PF2E.ActionsCheck.society", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/society.svg` },
		{ name: "PF2E.ActionsCheck.stealth", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/stealth.svg` },
		{ name: "PF2E.ActionsCheck.survival", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/survival.svg` },
		{ name: "PF2E.ActionsCheck.thievery", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/thievery.svg` }
	]
};
